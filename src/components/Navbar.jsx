function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">
          Kian Electricals
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-orange-500 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition">
            Services
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition">
            Projects
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition">
            Gallery
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition">
            Contact
          </li>
        </ul>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition">
          Get Quote
        </button>
      </div>
    </nav>
  );
}

export default Navbar;