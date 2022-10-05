import React, { useEffect } from 'react';

function App() {
  const modeHandler = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('mode', document.documentElement.className);
  };

  useEffect(() => {
    if (
      localStorage.getItem('mode') === 'dark' ||
      (!('mode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-red-500 dark:bg-blue-500">
        <button onClick={modeHandler}>Dark Mode</button>
      </div>
    </>
  );
}

export default App;
