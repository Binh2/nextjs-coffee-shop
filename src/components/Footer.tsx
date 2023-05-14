"use client";
import { ThemeContext } from '@/contexts/ThemeContext';
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react';

export function Footer() {
  const [theme, setTheme] = useContext(ThemeContext)
  return (<footer className={`bg-${theme}-700 text-${theme}-100 overflow-hidden text-xs px-6 py-2 text-opacity-80`}>
    <ul className={`inline-flex`}>
      <li>
        <Link href='/'>Home</Link>
        <span>&nbsp;|&nbsp;</span>
      </li>
      <li>
        <Link href='/'>News</Link>
        <span>&nbsp;|&nbsp;</span>
      </li>
      <li>
        <Link href='/'>Products</Link>
        <span>&nbsp;|&nbsp;</span>
      </li>
      <li>
        <Link href='/'>Services</Link>
        <span>&nbsp;|&nbsp;</span>
      </li>
      <li>
        <Link href='/'>Survey & Feedback</Link>
      </li>
    </ul>
    <span className='float-right'>&copy; 2023</span>
  </footer>);
}