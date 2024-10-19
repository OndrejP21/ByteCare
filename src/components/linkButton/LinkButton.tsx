import { LinkButtonType } from '@/types/link-button.types';
import Link from 'next/link';

export default function LinkButton({
  text,
  href,
  rewriteColors,
  className,
}: LinkButtonType) {
  return (
    <Link
      href={href}
      className={`${!rewriteColors && 'bg-myGreen text-white hover:bg-myPurple '} py-3 px-6 min-w-32 rounded-lg transition text-center duration-500 ${className}`}>
      {text}
    </Link>
  );
}
