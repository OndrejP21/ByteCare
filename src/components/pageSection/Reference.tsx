import { ReferenceType } from '@/types/page-section.types';

export default function Reference({
  text,
  name,
  className = 'bg-white',
}: ReferenceType) {
  return (
    <div
      className={`p-6 flex flex-col justify-between shadow-lg hover:shadow-xl rounded-lg text-center space-y-2 group ${className}`}>
      <p>„{text}“</p>
      <div className='text-myPurple group-hover:underline'>{name}</div>
    </div>
  );
}
