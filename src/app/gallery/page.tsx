import PageHeader from '@/components/pageHeader/PageHeader';
import PageSection from '@/components/pageSection/PageSection';
import Image from 'next/image';

export default function GaleriePage() {
  return (
    <main>
      <PageHeader
        header='Galerie'
        description='Prohlédněte si naši práci a zařízení, se kterými denně pracujeme.'
      />

      <PageSection className='bg-white text-myBlack pageSectionCompleteCenter'>
        <h2 className='mb-8'>Naše fotogalerie</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {Array(8)
            .fill('')
            .map((_, index) => (
              <div
                key={index}
                className='overflow-hidden transform transition duration-500 hover:scale-110 hover:z-10 cursor-pointer'>
                <Image
                  src={`/images/photo${index + 1}.webp`}
                  alt={`Obrázek galerie ${index + 1}`}
                  width={500}
                  height={0}
                  className='rounded-lg shadow-md'
                />
              </div>
            ))}
        </div>
      </PageSection>
    </main>
  );
}
