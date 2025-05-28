
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white text-gray-900 dark:bg-gray-800 dark:text-white shadow-md">
      <h1 className="text-2xl font-bold">MyProduct</h1>
      <DarkModeToggle />
    </nav>
  );
}


