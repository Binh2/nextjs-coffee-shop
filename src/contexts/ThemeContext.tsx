'use client';
import { Dispatch, createContext, useContext, useState } from "react";

export const ThemeContext = createContext<[string, any]>(["brown", function() {}]);
export function ThemeProvider(props: {children: any}) {
  const [ themeDefault, _ ] = useContext(ThemeContext);
  const [ theme, setTheme ] = useState(themeDefault);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
}