'use client';

import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/utils/routes';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/16/solid';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <header className='md:flex md:justify-between items-center bg-black py-2 lg:px-6 md:px-2 px-6 navbar text-myGray'>
      <div className='flex max-md:justify-between max-md:w-full'>
        <Link href='/'>
          <div className='flex items-center lg:gap-5 gap-2'>
            <Image src='/logo.png' alt='Logo ByteCare' width={60} height={0} />
            <h1>ByteCare</h1>
          </div>
        </Link>
        <div
          className='p-5 cursor-pointer'
          onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <Bars3Icon className='w-7 h-7 md:hidden block' />
        </div>
      </div>
      <nav className={`${isOpenMenu ? 'block' : 'md:block hidden'}`}>
        <ul className={`md:flex md:space-x-6 lg:text-md`}>
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                href={route.href}
                className={`hover:text-myGreen hover:underline lg:p-5 md:p-1 max-md:py-3 max-md:px-5 max-md:block ${route.href === path ? 'underline' : ''}`}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
