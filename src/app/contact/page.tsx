import ContactForm from '@/components/form/Form';
import PageHeader from '@/components/pageHeader/PageHeader';
import PageSection from '@/components/pageSection/PageSection';

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        header='Kontakt'
        description='Jsme tu pro vás. Kontaktujte nás pro jakékoliv dotazy či požadavky.'
      />

      <PageSection className='pageSectionCompleteCenter'>
        <h2 className='mb-8'>Kontaktní informace</h2>
        <div className='space-y-4'>
          <p>
            <strong>Email:</strong> info@bytecare.cz
          </p>
          <p>
            <strong>Telefon:</strong> +420 123 456 789
          </p>
          <p>
            <strong>Adresa:</strong> Hradecká 1227/4, 500 11 Hradec Králové 3
          </p>
        </div>

        <div className='mt-4 aspect-video w-3/4'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5411.099237937317!2d15.828323827997998!3d50.204164280595386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c2b34870002db%3A0xb60b1af457f3fbb2!2sUniverzita%20Hradec%20Kr%C3%A1lov%C3%A9%20%E2%80%93%20budova%20A!5e0!3m2!1scs!2scz!4v1729501479210!5m2!1scs!2scz'
            className='w-full h-full border-0'
            loading='lazy'
          />
        </div>
      </PageSection>

      <PageSection className='bg-myGreen'>
        <h2 className='text-center mb-4'>Napište nám!</h2>
        <ContactForm />
      </PageSection>
    </main>
  );
}
