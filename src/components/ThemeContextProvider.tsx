import { useState } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";
interface ThemeContextProviderProps {
  children: React.ReactElement;
}

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [currTheme, setCurrTheme] =
    useState<ThemeContextType["theme"]>("light");

  const toggleTheme = () => {
    setCurrTheme((prevTheme: ThemeContextType["theme"]) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
