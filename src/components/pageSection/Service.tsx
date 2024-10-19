import { ServiceType } from '@/types/page-section.types';

export default function Service({ header, text }: ServiceType) {
  return (
    <div className='p-6 bg-myGray shadow-lg hover:shadow-xl rounded-lg md:w-[400px] w-72 mx-auto'>
      <h3 className='text-xl font-bold mb-4'>{header}</h3>
      <p>{text}</p>
    </div>
  );
}
