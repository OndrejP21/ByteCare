import { PageSectionType } from '@/types/page-section.types';

export default function PageSection({
  children,
  isCustomPadding,
  className,
}: PageSectionType) {
  return (
    <section
      className={`${!isCustomPadding && 'py-16 lg:px-32 sm:px-10 px-5'} ${className}`}>
      {children}
    </section>
  );
}
