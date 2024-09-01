import logo from '../../assets/images/navbar/logo.png';

const Navbar = ({ isFixed }) => {
  return (
    <nav
      className={`p-4 lg:p-6 xl:p-8 flex justify-between items-center transition-all duration-300 ${
        isFixed ? 'fixed top-0 left-0 right-0 z-50 bg-[#151414]' : ''
      }`}
    >
      {/* Logo Section */}
      <div id="part-1">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16"
          />
        </a>
      </div>

      {/* Menu Items */}
      <div
        id="part-2"
        className="hidden md:flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mr-0 sm:mr-4 md:mr-6 lg:mr-8 xl:mr-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
      >
        <h1 className="cursor-pointer hover:text-[#F3C77C] transition-colors duration-200">
          Projects
        </h1>
        <h1 className="cursor-pointer hover:text-[#F3C77C] transition-colors duration-200">
          Expertises
        </h1>
        <h1 className="cursor-pointer hover:text-[#F3C77C] transition-colors duration-200">
          The Team
        </h1>
        <h1 className="cursor-pointer hover:text-[#F3C77C] transition-colors duration-200">
          Contact
        </h1>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button className="p-2 text-white focus:outline-none">
          {/* Mobile menu icon (hamburger) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
