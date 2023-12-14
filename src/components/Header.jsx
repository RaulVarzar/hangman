import { motion } from "framer-motion";
import { FromTop, FadeInOut } from "./Animations"
import { useState, useEffect } from "react";

export default function Header() {
  
  const tabs = ['tomato', 'lettuce', 'cheese'];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('storedTheme'))
  );

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem('storedTheme', JSON.stringify(theme));
  }, [theme]);

    return(
        <header className="w-full mx-auto mt-8 text-center sm:top-24">

              <FromTop delay={0.3} duration={0.3}>
                <h1 className="text-xl font-bold opacity-50 text-slate-500">
                  WELCOME TO
                </h1>
              </FromTop>

              <FromTop delay={0.4} duration={0.2}>
                <h1 className="mb-4 text-5xl font-extrabold tracking-wider text-slate-200">
                  HANGMAN
                </h1>
              </FromTop>

              <div className="mb-12 dropdown">
                <div tabIndex={0} role="button" className="m-1 rounded-2xl btn-sm btn">
                  THEME
                  <i class="fa-solid fa-chevron-down"></i>               
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] p-3 shadow-2xl rounded-xl bg-base-100  -ml-0.5 w-fit">
                  <li><input type="radio" name="theme-dropdown" className="text-center rounded-lg theme-controller btn btn-sm btn-block btn-ghost" onChange={() => setTheme('retro')} aria-label="Default" checked={theme==="retro"}/></li>
                  <li><input type="radio" name="theme-dropdown" className="mt-1 text-center rounded-lg theme-controller btn btn-sm btn-block btn-ghost" onChange={() => setTheme('valentine')} aria-label="Pink" checked={theme==="valentine"}/></li>
                  <li><input type="radio" name="theme-dropdown" className="mt-1 text-center rounded-lg theme-controller btn btn-sm btn-block btn-ghost" onChange={() => setTheme('coffee')} aria-label="Elegant" checked={theme==="coffee"}/></li>
                  <li><input type="radio" name="theme-dropdown" className="mt-1 text-center rounded-lg theme-controller btn btn-sm btn-block btn-ghost" onChange={() => setTheme('dark')} aria-label="Dark" checked={theme==="dark"}/></li>
                </ul>
              </div>

        </header>
    )
}