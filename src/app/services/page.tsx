import ContactForm from '@/components/form/Form';
import PageHeader from '@/components/pageHeader/PageHeader';
import PageSection from '@/components/pageSection/PageSection';
import Service from '@/components/pageSection/Service';
import { services } from '@/utils/services';

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        header='Nabízíme širokou škálu služeb pro vaše technologie'
        description='Od oprav hardwaru po instalaci softwaru – ByteCare je tu pro vás s
          odbornou péčí a precizností.'
      />

      <PageSection className='bg-white text-center'>
        <h2 className='mb-12'>Naše služby</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <Service key={index} header={service.header} text={service.text} />
          ))}
        </div>
      </PageSection>

      <PageSection className='bg-myGreen'>
        <h2 className='text-center mb-4'>Kontaktujte nás!</h2>
        <ContactForm />
      </PageSection>
    </main>
  );
}
