import LinkButton from '@/components/linkButton/LinkButton';
import PageSection from '@/components/pageSection/PageSection';
import Reference from '@/components/pageSection/Reference';
import Service from '@/components/pageSection/Service';
import { services } from '@/utils/services';

export default function Home() {
  return (
    <main>
      <PageSection className='bg-myGray text-myBlack flex flex-col justify-center items-center min-h-[200px]'>
        <h2 className='text-3xl font-bold mb-4'>
          Opravujeme vaše počítače a technologie rychle a efektivně s péčí o
          každý bajt
        </h2>
        <p className='text-xl mb-8'>
          ByteCare – odborníci na opravy hardwaru a softwaru s důrazem na
          preciznost a spolehlivost.
        </p>
        <LinkButton href='/contact' text='Kontaktujte nás' />
      </PageSection>

      <PageSection className='bg-white text-center flex flex-col items-center'>
        <h2 className='text-3xl font-bold mb-12'>Naše služby</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8'>
          {services.slice(0, 3).map((service, index) => (
            <Service key={index} header={service.header} text={service.text} />
          ))}
        </div>
      </PageSection>

      <PageSection className='bg-myGreen text-white flex flex-col justify-center items-center space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-8'>Proč ByteCare?</h2>
          <p>
            V dnešní digitální době se na technologie spoléháme více než kdy
            jindy. Když se však objeví technické problémy, může to mít negativní
            dopad na váš pracovní i osobní život. Právě proto je zde ByteCare –
            jsme specialisté, kteří se postarají o to, aby vaše zařízení
            fungovala vždy na 100 %. Naše mnohaleté zkušenosti v oblasti opravy
            počítačů, notebooků a dalších zařízení zajišťují, že vždy najdeme to
            nejefektivnější řešení pro vaše potřeby. ByteCare klade důraz na
            kvalitu, rychlost a maximální spokojenost zákazníků. Naším cílem je
            nejen opravit vaše zařízení, ale také poskytnout profesionální péči
            o každý detail. Ať už se jedná o hardwarové poruchy, softwarové
            problémy, nebo potřebujete preventivní údržbu, náš tým techniků je
            vždy připraven pomoci. Věříme, že každý problém má své řešení, a
            naším posláním je ho nalézt rychle a efektivně. S ByteCare máte
            jistotu, že vaše technologie budou v těch nejlepších rukou, a vy se
            budete moci bez obav soustředit na to, co je pro vás nejdůležitější.
          </p>
        </div>
        <LinkButton
          text='Zjistit více'
          href='/about'
          rewriteColors
          className='bg-myGray text-black hover:bg-myPurple hover:text-myGray w-40'
        />
      </PageSection>

      <PageSection className='bg-myGray text-center'>
        <h2 className='text-3xl font-bold mb-8'>Reference</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Reference
            text='Skvělá služba, rychlá a profesionální oprava mého počítače!'
            name='Jan Novák'
          />
          <Reference
            text='Děkuji za pomoc s instalací softwaru, vše proběhlo bez
                problémů.'
            name='Anna Svobodová'
          />
          <Reference
            text='Oceňuji rychlost a preciznost, doporučuji!'
            name='Pavel Dvořák'
          />
        </div>
      </PageSection>
    </main>
  );
}
