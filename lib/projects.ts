export interface Project {
  id: number;
  title: string;
  description: string;
  caseStudyUrl: string;
  prototypeUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Spending Stories for GPay",
    description: "Designed ML-powered spending insight feature; defined personalisation logic, user segmentation model requirements, and metrics for AI-driven financial narrative.",
    caseStudyUrl: "https://assets.nextleap.app/submissions/NLGPay-a8c68b31-fa5f-480d-be07-f2de861f2e1a.pdf",
    prototypeUrl: "https://repay-nicks-01847007.figma.site/",
    tags: ["Mobile", "0→1"],
  },
  {
    id: 2,
    title: "Hackathon Platform",
    description: "Hackathon platform for an Ed-Tech company with different views for Participants, Admins, and Judges.",
    caseStudyUrl: "https://assets.nextleap.app/submissions/Greatlearning-bf0ff1ca-a369-40cb-9e8f-920466ff6c46.pdf",
    prototypeUrl: "https://www.figma.com/make/cAVSESiCMUFV3itUTSwEjV/GL-Hackathon?p=f&t=g99j9KYhcBefdY87-0&fullscreen=1",
    tags: ["B2B", "SaaS"],
  },
  {
    id: 3,
    title: "App for Daily Small Ticket Size Investment",
    description: "AI-assisted investment recommendation engine — specified personalisation model inputs, risk tolerance signals, and A/B test framework to validate algorithm-driven index fund suggestions.",
    caseStudyUrl: "https://assets.nextleap.app/submissions/JarAPM-9323579c-d8cf-4347-a52a-c5d0a1a9ba33.pdf",
    prototypeUrl: "https://www.figma.com/make/pNe6bP9WX6z77A3uvEFakJ/Mutual-Fund-Micro-Investment-App?p=f&t=nRUjumfFRRWihkVA-0&fullscreen=1",
    tags: ["B2C", "Growth"],
  },
  {
    id: 4,
    title: "Improving WhatsApp Search Functionality",
    description: "Applied NLP-based search improvement — defined intent recognition requirements, ranking signal prioritisation, and relevance feedback loop for AI-powered search functionality.",
    caseStudyUrl: "https://assets.nextleap.app/submissions/NL_WhatsApp_Graduation-ad4af2f5-054f-42f5-9aea-b69528bfc012.pdf",
    prototypeUrl: "https://memory-elude-28092369.figma.site/",
    tags: ["Platform", "API"],
  },
  {
    id: 5,
    title: "Increasing Meaningful Engagement with Android Digital Wellbeing",
    description: "Improving Android DW App beyond charts and data — created an Emotion Map system where emotional state could be measured from phone and smartwatch usage patterns.",
    caseStudyUrl: "https://assets.nextleap.app/submissions/NL_AndroidDW-07afc0ca-1dcb-4b24-9e5b-c83605554bef.pdf",
    prototypeUrl: "https://android-dw-bodycheck.lovable.app/",
    tags: ["Retention", "UX"],
  },
];
