"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import { usePathname } from 'next/navigation'

export function NavBar({className}: {className: string | undefined} = {className: ''}) {
  const [theme, setTheme] = useContext(ThemeContext);
  const pathname = usePathname();
  const liStyle = (activePathname: String) => (pathname == activePathname && `bg-${theme}-400`) + ' ' + 'px-4 py-2 bg-opacity-50 overflow-hidden';
  const imageStyle = (activePathname: String) => (pathname != activePathname ? 'invisible': '') + ' ' + 'inline float-right w-auto max-h-[80%]';

  return (<nav className={`bg-${theme}-100 min-w-[25%]` + ' ' + className}>
    <ul className={`text-${theme}-700`}>
      <li className={liStyle('/')}>
        <Link className='py-5' href='/'>
          <span className={`font-bold h-[39px] leading-[39px] text-center`}>Home</span>
          <Image className={imageStyle('/')} src='/coffee-seed.png' alt='Coffee seed' width={40} height={39} />
        </Link>
      </li>
      <li className={liStyle('/about')}>
        <Link className='py-5' href='/about'>
        <span className={`font-bold h-[39px] leading-[39px] text-center`}>About</span>
          <Image className={imageStyle('/about')} src='/coffee-seed.png' alt='Coffee seed' width={40} height={39} />
        </Link>
      </li>
      <li className={liStyle('/location')}>
        <Link className='py-5' href="/location">
        <span className={`font-bold h-[39px] leading-[39px] text-center`}>Location</span>
          <Image className={imageStyle('/location')} src='/coffee-seed.png' alt='Coffee seed' width={40} height={39} />
        </Link>
      </li>
      <li className={liStyle('/menu')}>
        <Link className='py-5' href="/menu">
          <span className={`font-bold h-[39px] leading-[39px] text-center`}>Menu</span>
          <Image className={imageStyle('/menu')} src='/coffee-seed.png' alt='Coffee seed' width={40} height={39} />
        </Link>
      </li>
      <li className={liStyle('/contact')}>
        <Link className='py-5' href="/contact">
          <span className={`font-bold h-[39px] leading-[39px] text-center`}>Contact</span>
          <Image className={imageStyle('/contact')} src='/coffee-seed.png' alt='Coffee seed' width={40} height={39} />
        </Link>
      </li>
    </ul>
    <Image src="/cafe.png" alt="A coffee cup" width={131} height={182} />
  </nav>)
}