
const Navbar = () => {
  return (
    <nav className="w-full  flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://cdn.prod.website-files.com/65cc53411189234c497c8ee2/65d731bb2dd5416bfe0dd932_Layer_1.svg" alt="BILLIONE" className="h-8" />
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-green-600">About</li>
        <li className="cursor-pointer hover:text-green-600">Verticals</li>
        <li className="cursor-pointer hover:text-green-600">Sustainability</li>
        <li className="cursor-pointer hover:text-green-600">Vision</li>
        <li className="cursor-pointer hover:text-green-600">Invest</li>
        <li className="cursor-pointer hover:text-green-600">Media</li>
      </ul>

      {/* Contact Button */}
      <button className="border border-gray-800 px-4 py-1 rounded hover:bg-gray-100 transition">
        Contact ↗
      </button>
    </nav>
  );
};

export default Navbar;
