import {useState, useEffect} from "react";

import ThemeContext from "../context/themeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <ThemeContext.Provider value={{
    theme,
    handleThemeSwitch
  }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
