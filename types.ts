import type { ReactNode } from 'react';

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export enum FormStatus {
  Idle,
  Loading,
  Success,
  Error,
}

export interface Comment {
  email: string;
  text: string;
  date: string;
}

export interface Trend {
  id: number;
  title: string;
  image: string;
  snippet: string;
  content?: string; // Make content optional since we're using contentPath
  contentPath: string;
  publishDate: string;
}

export interface NavLink {
  name: string;
  href: string;
}
