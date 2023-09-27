import { useState, createContext } from "react";

const ThemeContext = createContext(null);
export { ThemeContext };

const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    setTheme((current) =>
      current === "light"
        ? "dark"
        : "light"
    );
  };
  
  const handler = (e) => {
    return e.key === "Enter" ? toggleTheme() : null;
  };

  return (
    <div className={`page__theme ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, handler }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
