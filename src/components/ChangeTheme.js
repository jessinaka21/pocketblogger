import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ChangeTheme = () => {
  const { currentTheme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    document.body.className = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme !== currentTheme) {
      setTheme(savedTheme);
    }
  }, [currentTheme, setTheme]);

  return (
    <div className="button-container">
      <p className="mt-3 mb-3">Choose a Theme:</p>
      <button className="btn btn-spring" onClick={() => setTheme("spring")}>
        Spring
      </button>
      <button className="btn btn-summer" onClick={() => setTheme("summer")}>
        Summer
      </button>
      <button className="btn btn-autumn" onClick={() => setTheme("autumn")}>
        Autumn
      </button>
      <button className="btn btn-winter" onClick={() => setTheme("winter")}>
        Winter
      </button>
    </div>
  );
};

export default ChangeTheme;
