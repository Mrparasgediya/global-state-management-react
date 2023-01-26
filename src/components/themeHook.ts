import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";

const useTheme = (): [
  ThemeContextType["theme"],
  ThemeContextType["toggleTheme"]
] => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return [theme, toggleTheme];
};

export default useTheme;
