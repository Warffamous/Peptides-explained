/**
 * Amino-acid properties for generated sequence visuals. Grouping by side-chain chemistry is
 * what determines how a peptide folds and binds, which is why the visuals encode it.
 */
export type ResidueClass = 'hydrophobic' | 'aromatic' | 'polar' | 'positive' | 'negative' | 'special' | 'nonstandard';

const CLASS: Record<string, ResidueClass> = {
  Ala: 'hydrophobic', Val: 'hydrophobic', Leu: 'hydrophobic', Ile: 'hydrophobic', Met: 'hydrophobic',
  Phe: 'aromatic', Trp: 'aromatic', Tyr: 'aromatic',
  Ser: 'polar', Thr: 'polar', Asn: 'polar', Gln: 'polar', Cys: 'polar',
  Lys: 'positive', Arg: 'positive', His: 'positive',
  Asp: 'negative', Glu: 'negative',
  Gly: 'special', Pro: 'special',
};

const ONE: Record<string, string> = {
  Ala: 'A', Arg: 'R', Asn: 'N', Asp: 'D', Cys: 'C', Gln: 'Q', Glu: 'E', Gly: 'G', His: 'H', Ile: 'I',
  Leu: 'L', Lys: 'K', Met: 'M', Phe: 'F', Pro: 'P', Ser: 'S', Thr: 'T', Trp: 'W', Tyr: 'Y', Val: 'V',
};

export type Residue = { code: string; base: string; d: boolean; cls: ResidueClass; one: string; position: number };

export function parseResidues(codes: string[]): Residue[] {
  return codes.map((code, i) => {
    const d = code.startsWith('D-');
    const base = code.replace(/^D-/, '');
    const cls = CLASS[base] ?? 'nonstandard';
    return { code, base, d, cls, one: ONE[base] ? (d ? ONE[base].toLowerCase() : ONE[base]) : 'X', position: i + 1 };
  });
}
