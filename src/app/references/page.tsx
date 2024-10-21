import PageHeader from '@/components/pageHeader/PageHeader';
import PageSection from '@/components/pageSection/PageSection';
import Reference from '@/components/pageSection/Reference';
import { references } from '@/utils/references'; // Import referencí z externí konstanty

export default function ReferencesPage() {
  return (
    <main>
      <PageHeader
        header='Reference'
        description='Nejste si jisti, jestli se pro nás rozohdnout? Přečtěte si, co o nás říkají naši zákazníci'
      />

      <PageSection className='pageSectionCompleteCenter'>
        <h2 className='mb-8'>Naše reference</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {references.map((reference, index) => (
            <Reference
              key={index}
              text={reference.text}
              name={reference.name}
              className='bg-myGray'
            />
          ))}
        </div>
      </PageSection>
    </main>
  );
}
