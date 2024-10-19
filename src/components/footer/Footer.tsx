import { routes } from '@/utils/routes';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex lg:justify-between justify-center max-lg:space-y-5 max-lg:flex-col bg-myBlack text-myGray p-8 text-center'>
      <div className='flex flex-col justify-end lg:w-1/4'>
        15. 10. 2024
        <span className='text-myGreen pl-2'>peteron1@uhk.cz</span>
      </div>
      <div>
        <p className='text-center'>
          &copy; 2024 Ondřej Petera. Všechna práva vyhrazena.
        </p>
        <ul className='flex justify-center flex-wrap space-x-4 mt-4 gap-y-5'>
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={route.href} className='hover:text-myGreen'>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col justify-end lg:w-1/4'>
        <div>Studentský zápočtový projekt</div>
        <div className='text-myGreen'>Univerzita Hradec Králové</div>
      </div>
    </footer>
  );
}
