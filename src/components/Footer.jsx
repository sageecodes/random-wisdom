function Footer() {
  return (
    <footer className="mt-12 w-full bg-gray-800 text-gray-200 py-4 flex flex-col items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Random Wisdom</p>
      <p className="text-xs mt-1">Made with ❤️ using React & Tailwind CSS</p>
    </footer>
  );
}

export default Footer;
