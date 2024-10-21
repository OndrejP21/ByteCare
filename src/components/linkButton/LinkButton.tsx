import { LinkButtonType } from '@/types/link-button.types';
import Link from 'next/link';

export default function LinkButton({ text, href, className }: LinkButtonType) {
  return (
    <Link
      href={href}
      className={`py-3 px-6 min-w-32 rounded-lg transition text-center duration-500 linkButton ${className}`}>
      {text}
    </Link>
  );
}
