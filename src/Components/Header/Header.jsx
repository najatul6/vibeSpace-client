import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className=" shadow w-full z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Left section - Logo */}
          <div className="text-blue-600 text-2xl font-bold">
            <a href="#">MyLogo</a>
          </div>
          {/* Center section - Menu (Hidden on small screens) */}
          <div className="hidden md:flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 11-7.938 8.514 4.5 4.5 0 00-.964-.028 5.5 5.5 0 010 11H10a8 8 0 010-16z" />
              </svg>
              Home
            </a>
            <a href="#" className="hover:text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 7a4 4 0 114 4H7v5a1 1 0 11-2 0v-5H4a4 4 0 014-4z" />
              </svg>
              Search
            </a>
            <a href="#" className="hover:text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4h12v12H4z" />
              </svg>
              Notifications
            </a>
            <a href="#" className="hover:text-blue-600 flex items-center">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 110 16 8 8 0 010-16z" />
              </svg>
              Profile
            </a>
          </div>
          {/* Right section - Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center bg-red-400">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-8 h-8 " fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5h14M3 10h14M3 15h14" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu (Hidden by default, shown when toggled) */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-base-300 shadow-lg px-4 py-2`}>
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Search</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Notifications</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Profile</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
