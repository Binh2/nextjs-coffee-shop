"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeBar } from '@/components/ThemeBar'
import Image from 'next/image'
import { ThemeContext, ThemeProvider } from '@/contexts/ThemeContext'
import { HeroHeader } from '../components/HeroHeader';
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { useContext, useState } from 'react'
import { WinterAnimation } from '@/components/WinterAnimation';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Somewhere Coffee Shop',
//   description: 'An simple coffee shop website',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [themeDefault, _] = useContext(ThemeContext);
  const [theme, setTheme] = useState(themeDefault);
  return (
    <html lang="en">
      <Head>
        <title>Somewhere Coffee Shop</title>
        <meta name="description" content="An simple coffee shop website" />
      </Head>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <body className={inter.className + ' ' + `bg-${theme}-300 bg-opacity-[0.87] bg-bg-pattern bg-repeat-x shadow-2xl overflow-x-hidden`}>
          <WinterAnimation></WinterAnimation>
          <div className='max-w-[800px] absolute left-[50%] -translate-x-[50%]'>
            <ThemeBar></ThemeBar>
            <HeroHeader></HeroHeader>
            <div className='flex'>
              <NavBar className='flex-[0.5fr]'></NavBar>
              {children}
            </div>
            <Footer></Footer>
          </div>
        </body>
      </ThemeContext.Provider>
    </html>
  )
}
