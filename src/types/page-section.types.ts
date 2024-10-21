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
  className?: string;
}

export interface PageHeaderType {
  header: string;
  description: string;
  children?: ReactNode;
}

export interface PriceListType {
  name: string;
  price: number;
}
