'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navmenu = [
  {
    id: '1',
    name: 'Home',
    link: '/',
  },
  {
    id: '2',
    name: 'Contact us',
    link: '/Contact',
  },
  {
    id: '3',
    name: 'About Us',
    link: '/About',
  },
  {
    id: '4',
   
    name: 'Sign Up',
    link: '/',
  },
  {
    id: '5',
    name: 'Sign In',
    link: '/',
  },
];

export default function Navbar() {
  const params = usePathname();

  return (
    <div className='px-[41px] py-[27px] text-white w-full flex items-center justify-end container mx-auto '>
      {navmenu.map((item) => {
        if (
          (params?.includes('About') || params?.includes('Contact')) &&
          (item.id === '4' || item.id === '5')
        ) {
          return null;
        }
        if (
          (!params?.includes('About') && !params?.includes('Contact')) &&
          (item.id === '1' || item.id === '2')
        ) {
          return null;
        }

        return (
          <li className={`list-none py-1 mx-2 px-4 ${item.id === "4" ? "border rounded-full  border-white " : item.id === "5" ? "rounded-full bg-[#2E8544] "  : "" }`} key={item.id}>
            <Link href={item.link} >
                {item.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
