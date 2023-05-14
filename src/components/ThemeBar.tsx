"use client";
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export function ThemeBar() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <section className={`bg-${theme}-700 px-3 py-2 overflow-hidden`}>
      <div className="inline-flex gap-1">
        <button onClick={() => setTheme("brown")}>
          <Image alt="Brown theme button" src="/yellow-css.jpg" width={16} height={16} />
        </button>
        <button onClick={() => setTheme("green")}>
          <Image alt="Green theme button" src="/green-css.jpg" width={16} height={16} />
        </button>
        <button onClick={() => setTheme("pink")}>
          <Image alt="Pink theme button" src="/pink-css.jpg" width={16} height={16} />
        </button>
      </div>
      <select className={`text-${theme}-700 float-right font-semibold text-sm`}
      value={theme} onChange={(event) => { setTheme(event.target.value) }}>
        <option className={`text-brown-700`} value="brown">Brown</option>
        <option className={`text-green-700`} value="green">Green</option>
        <option className={`text-pink-700`} value="pink">Pink</option>
      </select>
    </section>
  )
}