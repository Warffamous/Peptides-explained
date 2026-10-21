/** The component map passed to every MDX <Content />. Must match src/schemas/components.ts. */
import Cite from './Cite.astro';
import Claim from './Claim.astro';
import Q from './Q.astro';
import Seq from './Seq.astro';
import Term from './Term.astro';
import Callout from './Callout.astro';
import Diagram from './Diagram.astro';
import Checklist from './Checklist.astro';
import Faq from './Faq.astro';
import FaqItem from './FaqItem.astro';
import EvidenceGrade from './EvidenceGrade.astro';
import WarningSigns from './WarningSigns.astro';
import PageList from './PageList.astro';
import CompoundIndex from './CompoundIndex.astro';
import Timeline from './Timeline.astro';
import GradeRubric from './GradeRubric.astro';
import GradeMatrix from './GradeMatrix.astro';
import CorrectionsLog from './CorrectionsLog.astro';
import ChangeTracker from './ChangeTracker.astro';
import NewsList from './NewsList.astro';
import GlossaryIndex from './GlossaryIndex.astro';
import SourcesIndex from './SourcesIndex.astro';
import JurisdictionCard from './JurisdictionCard.astro';
import Section from './Section.astro';
import Mechanism from './Mechanism.astro';
import StudyTable from './StudyTable.astro';
import RegulatoryTable from './RegulatoryTable.astro';
import AuthorisedProducts from './AuthorisedProducts.astro';
import SequenceView from './SequenceView.astro';
import Photo from './Photo.astro';
import Infographic from './Infographic.astro';
import MediaCredits from './MediaCredits.astro';
import Explainer from './Explainer.astro';
import Lead from './Lead.astro';
import InDetail from './InDetail.astro';
import KeyNumber from './KeyNumber.astro';
import Compare from './Compare.astro';
import Verdict from './Verdict.astro';
import IconArray from './IconArray.astro';
import TimeStrip from './TimeStrip.astro';

export const mdxComponents = {
  Cite, Claim, Q, Seq, Term, Callout, Diagram, Checklist, Faq, FaqItem, EvidenceGrade, WarningSigns, PageList,
  CompoundIndex, Timeline, GradeRubric, GradeMatrix, CorrectionsLog, ChangeTracker, NewsList, GlossaryIndex,
  SourcesIndex, JurisdictionCard, Section, Mechanism, StudyTable, RegulatoryTable, AuthorisedProducts, SequenceView,
  Explainer,
  Photo, Infographic, MediaCredits,
  // "less text, more visuals" (CONTENT-GUIDE §9)
  Lead, InDetail, KeyNumber, Compare, Verdict, IconArray, TimeStrip,
};
