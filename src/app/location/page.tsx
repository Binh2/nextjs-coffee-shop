"use client"
import { useContext } from "react";
import { ThemeContext } from '@/contexts/ThemeContext'
import Image from 'next/image';

export default function Location() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (<main className={`p-3 text-${theme}-500 bg-white`}>
    <h1 className={`text-lg font-bold`}>Somewhere Coffee Shop Locations</h1>
    <p className={`text-sm mb-2`}>We are conveniently located in lower manhattan with plans to expand into Brooklyn in 2013</p>
    <p className={`text-xs`}>292 Union Square West at 13th St. New York, New York 10003 </p>
    <p className={`text-xs`}>Telephone: 212.555.5555</p>

    <h1 className={`text-lg font-bold mt-3`}>Takeout Available | Delivery Available</h1>
    <p className={`text-sm`}>Delivery Payment: $12 minimum Delivery Hours:  Daily, 10am-midnight</p>
    <p className={`text-sm mb-4`}>Delivery Area: 8th St. to 26th St., Second Ave. to Seventh Ave.</p>
    <Image src="/map.png" alt="Map of this coffee shop" width={561} height={331} />
  </main>)
}