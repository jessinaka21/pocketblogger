import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CurrentTheme = () => {
  const { currentTheme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  return (
    <div className="button-container">
      <p className="mt-3 mb-3">Change Theme</p>
      <button class="btn btn-spring" onClick={() => setTheme("spring")}>
        Spring
      </button>
      <button class="btn btn-summer" onClick={() => setTheme("summer")}>
        Summer
      </button>
      <button class="btn btn-autumn" onClick={() => setTheme("autumn")}>
        Autumn
      </button>
      <button class="btn btn-winter" onClick={() => setTheme("winter")}>
        Winter
      </button>
    </div>
  );
};

export default CurrentTheme;
