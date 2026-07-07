import { LucideIcon } from 'lucide-react';

export type CommitteeMember = {
  name: string;
  role: string;
  image: string;
};

export type CommitteeEvent = {
  title: string;
  description: string;
  image: string;
  date?: string;
};

export type CommitteeData = {
  id: string;
  name: string; // e.g., 'iPlace'
  fullName: string; // e.g., 'Placement & Corporate Relations Committee'
  tagline: string;
  oneLiner: string;
  color: {
    base: string; // hex
    light: string;
    text: string; // tailwind class
    bg: string; // tailwind class
    border: string; // tailwind class
  };
  icon: string; // mapped to LucideIcon in components
  heroImage: string;
  about: string;
  mission: string;
  vision: string;
  whatWeDo: {
    title: string;
    description: string;
  }[];
  flagshipEvent: CommitteeEvent;
  team: CommitteeMember[];
};
