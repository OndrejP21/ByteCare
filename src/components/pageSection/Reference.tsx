import { ReferenceType } from '@/types/page-section.types';

export default function Reference({ text, name }: ReferenceType) {
  return (
    <div className='p-6  flex flex-col justify-between bg-white shadow-lg hover:shadow-xl rounded-lg text-center space-y-2 group'>
      <p>„{text}“</p>
      <div className='text-myPurple group-hover:underline'>{name}</div>
    </div>
  );
}
