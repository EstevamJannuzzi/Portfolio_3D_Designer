import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const darkMode = localStorage.getItem("darkMode");
    return darkMode ? JSON.parse(darkMode) : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return (
    <button
      onClick={toggleDarkMode}
      className="cursor-pointer"
      aria-label="Alternar modo escuro"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-sky-blue dark:text-blue-iris hover:text-blue-iris dark:hover:text-sky-blue transition-colors" />
      ) : (
        <Moon className="w-6 h-6 text-sky-blue dark:text-blue-iris hover:text-blue-iris dark:hover:text-sky-blue transition-colors" />
      )}
    </button>
  );
};

export default DarkMode;
