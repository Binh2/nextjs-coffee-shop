"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Contact() {
  const [theme, setTheme] = useContext(ThemeContext)
  return (<main className={`p-3 bg-white text-${theme}-500`}>
    <h1 className={`text-lg font-bold`}>Contact us</h1>
    <p className={`text-sm`}>Thank you for your interest. Please send us comments using the form below:</p>
    <form className={`flex gap-1 flex-col`}>
      <div>
        <label>
          <span className={`inline-block w-[30%]`}>First name</span>
          <input className={`border border-${theme}-700`}></input>
        </label>
      </div>
      <div>
        <label>
          <span className={`inline-block w-[30%]`}>Last name</span>
          <input className={`border border-${theme}-700`}></input>
        </label>
      </div>
      <div>
        <label>
          <span className={`inline-block w-[30%]`}>Phone</span>
          <input className={`border border-${theme}-700`}></input>
        </label>
      </div>
      <div>
        <label>
          <span className={`inline-block w-[30%]`}>Email</span>
          <input className={`border border-${theme}-700`}></input>
        </label>
      </div>
      <div>
        <label>
          <span className={`inline-block w-[30%]`}>Comments</span>
          <textarea className={`border border-${theme}-700 max-w-[65%]`}></textarea>  
        </label>
      </div>
      <div className={`mb-2`}>
        <label>
          <span className={`inline-block w-[30%]`}></span>
          <input className={`mr-1`} type="checkbox"></input>
          <span>Send me your monthly newsletter</span>
        </label>
      </div>
      <div>
        <span className={`inline-block w-[30%]`}></span>
        <button className={`border border-${theme}-700 px-3 py-1`}>Submit</button>
      </div>
    </form>
  </main>)
}