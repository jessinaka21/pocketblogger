import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? storedTheme : "default";

  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    document.body.className = currentTheme;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
