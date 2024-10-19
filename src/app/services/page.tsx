import ContactForm from '@/components/form/Form';
import PageSection from '@/components/pageSection/PageSection';
import Service from '@/components/pageSection/Service';
import { services } from '@/utils/services';

export default function ServicesPage() {
  return (
    <main>
      <PageSection className='bg-myGray text-myBlack flex flex-col justify-center items-center min-h-[200px]'>
        <h2 className='text-3xl font-bold mb-4'>
          Nabízíme širokou škálu služeb pro vaše technologie
        </h2>
        <p className='text-xl mb-8'>
          Od oprav hardwaru po instalaci softwaru – ByteCare je tu pro vás s
          odbornou péčí a precizností.
        </p>
      </PageSection>

      <PageSection className='bg-white text-center'>
        <h1 className='text-3xl font-bold mb-12'>Naše služby</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Service key={index} header={service.header} text={service.text} />
          ))}
        </div>
      </PageSection>

      <PageSection className='bg-myGreen'>
        <ContactForm />
      </PageSection>
    </main>
  );
}
