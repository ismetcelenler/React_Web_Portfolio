import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Tercih edilen temayı kontrol et
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    
    // Yerel depolamada tema varsa veya kullanıcı karanlık temayı tercih ediyorsa
    if (storedTheme === 'dark' || (!storedTheme && userPrefersDark)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);
  
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none transition-colors"
      aria-label="Temayı Değiştir"
    >
      {darkMode ? (
        <i className="fas fa-sun text-xl"></i>
      ) : (
        <i className="fas fa-moon text-xl"></i>
      )}
    </button>
  );
}

export default ThemeToggle;