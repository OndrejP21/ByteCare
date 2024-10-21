import PageHeader from '@/components/pageHeader/PageHeader';
import PageSection from '@/components/pageSection/PageSection';
import Reference from '@/components/pageSection/Reference';
import Service from '@/components/pageSection/Service';
import { references } from '@/utils/references';
import { services } from '@/utils/services';

export default function Home() {
  return (
    <main>
      <PageHeader
        header='Opravujeme vaše počítače a technologie rychle a efektivně s péčí o
          každý bajt'
        description='ByteCare – odborníci na opravy hardwaru a softwaru s důrazem na
          preciznost a spolehlivost.'></PageHeader>

      <PageSection className='pageSectionCompleteCenter'>
        <h2 className='mb-12'>Naše služby</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8'>
          {services.slice(0, 3).map((service, index) => (
            <Service key={index} header={service.header} text={service.text} />
          ))}
        </div>
      </PageSection>

      <PageSection className='bg-myGreen text-black pageSectionCompleteCenter space-y-8'>
        <h2 className='mb-4'>Proč ByteCare?</h2>
        <p>
          V dnešní digitální době se na technologie spoléháme více než kdy
          jindy. Když se však objeví technické problémy, může to mít negativní
          dopad na váš pracovní i osobní život. Právě proto je zde ByteCare –
          jsme specialisté, kteří se postarají o to, aby vaše zařízení fungovala
          vždy na 100 %. Naše mnohaleté zkušenosti v oblasti opravy počítačů,
          notebooků a dalších zařízení zajišťují, že vždy najdeme to
          nejefektivnější řešení pro vaše potřeby. ByteCare klade důraz na
          kvalitu, rychlost a maximální spokojenost zákazníků. Naším cílem je
          nejen opravit vaše zařízení, ale také poskytnout profesionální péči o
          každý detail. Ať už se jedná o hardwarové poruchy, softwarové
          problémy, nebo potřebujete preventivní údržbu, náš tým techniků je
          vždy připraven pomoci. Věříme, že každý problém má své řešení, a naším
          posláním je ho nalézt rychle a efektivně. S ByteCare máte jistotu, že
          vaše technologie budou v těch nejlepších rukou, a vy se budete moci
          bez obav soustředit na to, co je pro vás nejdůležitější.
        </p>
      </PageSection>

      <PageSection className='bg-myGray text-center'>
        <h2 className='mb-8'>Reference</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {references.slice(0, 3).map((reference, index) => (
            <Reference
              key={index}
              text={reference.text}
              name={reference.name}
            />
          ))}
        </div>
      </PageSection>
    </main>
  );
}
