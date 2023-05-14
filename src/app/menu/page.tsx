"use client"
import { ThemeContext } from "@/contexts/ThemeContext"
import { useContext } from "react"

export default function Menu() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (<main className={`bg-white p-3 text-${theme}-500`}>
    <h1 className={`text-lg font-bold`}>Menu</h1>
    <p className={`text-sm pb-2`}>We are proud to offer muffins, scones, danish treats and various pastries</p>
    <table>
      <tr className={`bg-${theme}-100 bg-opacity-50`}>
        <th className={`pl-5 text-left`}>Item</th>
        <th className={`pr-5 text-left`}>Price</th>
      </tr>
      <tr>
        <td className={`pl-5 text-sm`}>Muffins - Blueberry, Apple Cinnamon, Bananna Nut, Chocolate Chip</td>
        <td className={`pr-5 text-sm`}>$3.95</td>
      </tr>
      <tr>
        <td className={`pl-5 text-sm`}>Scones - Cherry, Cranberry, Raspberry, Blueberry, Flavor of the Day</td>
        <td className={`pr-5 text-sm`}>$3.95</td>
      </tr>
      <tr>
        <td className={`pl-5 text-sm`}>Danish - Apple, Cheese</td>
        <td className={`pr-5 text-sm`}>$4.99</td>
      </tr>
      <tr>
        <td className={`pl-5 text-sm`}>Various Cookies, Cakes</td>
        <td className={`pr-5 text-sm max-w-[30%]`}>$3.95 - 5.95</td>
      </tr>
    </table>
  </main>)
}