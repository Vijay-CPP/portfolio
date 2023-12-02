import React, { useContext, createContext, useState, useEffect } from "react";

const themeContext = createContext();

export function ThemeContextProvider({ children }) {
  // Load theme from local storage or default to "light"
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  // Update local storage when the theme changes
  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Set the initial theme in local storage on mount
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export function useTheme() {
  return useContext(themeContext);
}
