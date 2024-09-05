import logo from '../../assets/images/navbar/logo.png';

const Navbar = ({ isFixed }) => {
  return (
    <nav
      className={`p-4 flex justify-between items-center transition-all duration-300 ${
        isFixed ? 'fixed top-0 left-0 right-0 z-50 bg-[#151414]' : ''
      }`}
    >
      {/* Logo Section */}
      <div id="part-1">
        <a href="/">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </a>
      </div>

      {/* Menu Items */}
      <div id="part-2" className="flex items-center justify-center gap-4 text-sm">
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
    </nav>
  );
};

export default Navbar;
