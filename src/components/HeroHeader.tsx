"use client";
import Image from 'next/image'
import { useCallback, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from './HeroHeader.module.css';
import { ImageSlide } from './ImageSlide';

export function HeroHeader() {
  const [theme, setTheme] = useContext(ThemeContext);
  
  return (<section className=''>
    <div className={`relative`}>
      <ImageSlide></ImageSlide>
      <div className={`absolute top-[50%] -translate-y-[50%] left-[40px] max-w-[40%] bg-${theme}-500 py-4 px-12 text-white bg-opacity-50 text-right font-bold text-xs`}>
        The scent of spring anvigorates her as she ignores whilst the warm breeze brings a wave of tranquility.
      </div>
    </div>
    {/* <h1 className={`px-5 py-1 bg-${theme}-800 text-right font-bold text-lg`}>Somewhere Coffee Shop</h1> */}
    <div className={`w-[100%] bg-${theme}-700`}>
      <Image className={`block ml-auto h-9 w-auto`} src="/logo.png" alt="Shop name" width={436} height={60} />
    </div>
  </section>)
}