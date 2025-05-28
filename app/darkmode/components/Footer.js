export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      &copy; {new Date().getFullYear()} MyProduct. All rights reserved.
    </footer>
  );
}
