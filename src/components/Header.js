import { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import "./DarkMode.css";

function Header() {
  const [theme, setTheme] = useState("light");
  function changeModeHandler() {
    setTheme(() => {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <Stack direction="horizontal" gap={3} className={`App container ${theme}`}>
      <h1>Where in the world?🌏</h1>
      <button onClick={changeModeHandler} className="ms-auto">
        Change Mode
      </button>
    </Stack>
  );
}

export default Header;
