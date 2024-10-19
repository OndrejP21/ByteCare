import { ReactNode } from 'react';

export interface PageSectionType {
  children: ReactNode;
  isCustomPadding?: boolean;
  className?: string;
}

export interface ServiceType {
  header: string;
  text: ReactNode;
}

export interface ReferenceType {
  text: string;
  name: string;
}
