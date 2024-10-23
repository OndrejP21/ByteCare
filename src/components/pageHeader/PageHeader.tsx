import { PageHeaderType } from '@/types/page-section.types';
import PageSection from '../pageSection/PageSection';

export default function PageHeader({
  header,
  description,
  children,
}: PageHeaderType) {
  return (
    <PageSection className='bg-myGray text-black flex flex-col justify-center items-center min-h-[200px]'>
      <h2 className='mb-4'>{header}</h2>
      <p className='text-lg mb-4'>{description}</p>

      {children}
    </PageSection>
  );
}
