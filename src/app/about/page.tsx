"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";
import Image from 'next/image';

export default function About() {
  const [theme, setTheme] = useContext(ThemeContext);
  const imageStyle = `max-w-[calc(100%/3-5px-8px)] h-auto`;
  
  return (<main className={`p-3 bg-white text-${theme}-500`}>
    <h1 className={`text-lg font-bold`}>Somewhere Coffee Shop</h1>
    <p className={`text-sm`}>Somewhere Coffee Co. began as a small coffee cart on the corner of 28th and 3rd street. As the lines began to grow, we thought &quot;why not open a coffee shop?&quot; and expanded into our current location. The rest is Somewhere in history. We have been in the coffee business for 8 years and are masters at our craft. We select only the finest beans to go into our blends and strive for excellence in customer satisfaction. We offer quiet nooks for sipping and reading your favorite book, catching up with old friends or simply enjoying a cup outside and watching the world go by.</p>
    <p className={`text-sm`}>Whatever your coffee conundrum commands, find it at Somewhere.</p>
    <div className={`flex max-w-[100%] gap-5 py-4`}>
      <Image className={imageStyle} src="/coffee1.png" alt="Outside view from a high place" width={600} height={400} />
      <Image className={imageStyle} src="/coffee2.jpg" alt="Scooping multiple coffee seeds" width={600} height={400} />
      <Image className={imageStyle} src="/coffee3.jpg" alt="Sitting area" width={600} height={400} />
    </div>
    <h2 className='text-lg font-bold'>NEW Maui Wauwi Blends!</h2>
    <p className='text-sm'>Straight from the sun drenched fields of Hawaii, we are proud to bring you the very best. Our new Maui Wauwi blend combines the subtle Sumatra aroma with the bold taste of Kona in one single satisfying cup. For a limited time only.</p>
  </main>)
}