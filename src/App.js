import "./App.css";
import "./ChangeTheme.css";
import JournalApp from "./components/Journal";
import ChangeTheme from "./components/ChangeTheme";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div className={`App ${currentTheme}`}>
      <ChangeTheme />
      <JournalApp />
    </div>
  );
}
export default App;
