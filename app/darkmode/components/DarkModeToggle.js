'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-3 py-2 bg-gray-200 text-gray-900 rounded dark:bg-gray-700 dark:text-white transition"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
