/** Pagefind search, loaded only on the search page and only when the reader searches. */
type Result = { url: string; meta: { title?: string }; excerpt: string };
type Pagefind = { init: () => Promise<void>; debouncedSearch: (q: string) => Promise<{ results: { data: () => Promise<Result> }[] } | null> };

const form = document.querySelector<HTMLFormElement>('[data-search]');
if (form) {
  const input = form.querySelector<HTMLInputElement>('input[type="search"]')!;
  const status = form.querySelector<HTMLElement>('[data-search-status]')!;
  const list = form.querySelector<HTMLOListElement>('[data-search-results]')!;
  let pf: Pagefind | null = null;
  const load = async () => {
    if (pf) return pf;
    const path = `${form.dataset.bundle}pagefind.js`;
    pf = (await import(/* @vite-ignore */ path)) as Pagefind;
    await pf.init();
    return pf;
  };
  const run = async () => {
    const q = input.value.trim();
    const params = new URLSearchParams(location.search);
    if (q) params.set('q', q);
    else params.delete('q');
    history.replaceState(null, '', `${location.pathname}${params.size ? `?${params}` : ''}`);
    if (!q) {
      list.replaceChildren();
      status.textContent = '';
      return;
    }
    status.textContent = status.dataset.tLoading ?? '';
    try {
      const engine = await load();
      const res = await engine.debouncedSearch(q);
      if (!res) return;
      const data = await Promise.all(res.results.slice(0, 20).map((r) => r.data()));
      list.replaceChildren(
        ...data.map((d) => {
          const li = document.createElement('li');
          li.className = 'search__result';
          const a = document.createElement('a');
          a.href = d.url;
          a.className = 'search__result-title';
          a.textContent = d.meta.title ?? d.url;
          const p = document.createElement('p');
          p.className = 'search__excerpt';
          p.innerHTML = d.excerpt; // Pagefind escapes content and only adds <mark>
          li.append(a, p);
          return li;
        }),
      );
      status.textContent = data.length ? (status.dataset.tResults ?? '{n}').replace('{n}', String(res.results.length)) : (status.dataset.tNone ?? '');
    } catch {
      status.textContent = status.dataset.tNone ?? '';
    }
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    void run();
  });
  input.addEventListener('input', () => void run());
  const initial = new URLSearchParams(location.search).get('q');
  if (initial) {
    input.value = initial;
    void run();
  }
}
