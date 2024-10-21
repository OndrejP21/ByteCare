import PageHeader from '@/components/pageHeader/PageHeader';
import PageSection from '@/components/pageSection/PageSection';
import { priceList } from '@/utils/services';

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        header='O nás'
        description='Jsme ByteCare – váš partner pro profesionální servis počítačů a
          technologií.'
      />

      <PageSection className='pageSectionCompleteCenter'>
        <h2 className='mb-8'>Kdo jsme?</h2>
        <p>
          ByteCare vznikl s cílem poskytovat spolehlivé a rychlé řešení pro
          všechny technické problémy, kterým dnes lidé a firmy čelí. Naší misí
          je zajistit, aby technologie, na kterých závisí vaše práce a osobní
          život, fungovaly vždy bezchybně.
        </p>
        <p>
          Náš tým má bohaté zkušenosti v oblasti oprav hardwaru, instalace
          softwaru a IT konzultací. Zajišťujeme kompletní péči o vaše zařízení,
          od diagnostiky problémů po jejich rychlou a efektivní opravu.
        </p>
        <p>
          Zakládáme si na individuálním přístupu ke každému klientovi. Rozumíme,
          že každý problém je jedinečný, a proto navrhujeme řešení šité na míru
          přesně vašim potřebám. Kvalita a spokojenost zákazníků jsou pro nás na
          prvním místě.
        </p>
      </PageSection>

      <PageSection className='bg-myGreen text-white pageSectionCompleteCenter'>
        <h2 className='mb-8'>Naše mise a vize</h2>
        <ul className='list-disc list-inside space-y-2'>
          <li>
            Poskytujeme rychlou a odbornou pomoc při technických problémech.
          </li>
          <li>
            Usilujeme o to, aby naši klienti měli spolehlivé technologie, na
            které se mohou vždy spolehnout.
          </li>
          <li>
            Dbáme na to, aby vaše zařízení fungovala bezchybně a efektivně.
          </li>
          <li>
            Naší vizí je stát se lídrem v oblasti oprav IT technologií s důrazem
            na kvalitu a osobní přístup.
          </li>
          <li>
            Každý problém má své řešení – jsme tu, abychom ho rychle našli.
          </li>
          <li>
            Klademe důraz na dlouhodobou péči a prevenci problémů s vašimi
            zařízeními.
          </li>
        </ul>
      </PageSection>

      <PageSection className='bg-white text-myBlack pageSectionCompleteCenter'>
        <blockquote className='border-l-4 border-myGreen pl-4 italic text-lg flex flex-col items-center'>
          „ByteCare není jen o opravách. Naším cílem je přinést dlouhodobou
          hodnotu našim zákazníkům tím, že zajistíme, aby jejich technologie
          fungovaly spolehlivě a efektivně. Nabízíme nejen technickou podporu,
          ale i poradenství, které vám pomůže optimálně využívat vaše zařízení.
          S námi máte jistotu, že vaše technologie budou vždy v těch nejlepších
          rukou.“
          <p className='mt-4 text-sm'>— Majitel firmy ByteCare</p>
        </blockquote>
      </PageSection>

      <PageSection className='bg-myGray text-myBlack pageSectionCompleteCenter'>
        <h2 className='mb-8'>Ceník IT služeb</h2>

        <table className='w-full table-auto border-collapse bg-white rounded-lg shadow-lg'>
          <thead className='bg-myGreen text-white'>
            <tr>
              <th className='p-4 text-center'>Služba</th>
              <th className='p-4 text-right'>Cena</th>
            </tr>
          </thead>
          <tbody>
            {priceList.map((price, index) => (
              <tr className='border-t hover:bg-myGray' key={index}>
                <td className='p-4'>{price.name}</td>
                <td className='p-4 text-right'>{price.price} Kč</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageSection>
    </main>
  );
}
