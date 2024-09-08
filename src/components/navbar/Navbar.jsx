import { useState } from 'react';
import logo from '../../assets/images/navbar/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isFixed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle Modal Visibility
  const toggleModal = () => {
    if (isModalOpen) {
      setIsAnimating(true); // Start animation before closing
      setTimeout(() => {
        setIsModalOpen(false); // Close modal after animation completes
        setIsAnimating(false);
      }, 300); // Match this duration with CSS transition time
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
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

        {/* Hamburger Icon */}
        <div className="block md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-[#e9b04f] text-2xl cursor-pointer"
            onClick={toggleModal}
          />
        </div>

        {/* Menu Items for Larger Screens */}
        <div id="part-2" className="hidden md:flex items-center gap-4 text-sm">
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

      {/* Modal for Small Screens */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-[#151414] shadow-lg p-6 flex flex-col items-start z-50 transition-transform duration-300 ease-in-out ${
          isModalOpen || isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button with FontAwesome */}
        <FontAwesomeIcon
          icon={faTimes}
          className="self-end text-[#e9b04f] text-2xl cursor-pointer mb-4"
          onClick={toggleModal}
        />
        
        {/* Menu Items */}
        <h1 className="cursor-pointer text-[#e5b45e] transition-colors duration-200 mb-4">
          Projects
        </h1>
        <h1 className="cursor-pointer text-[#e5b45e] transition-colors duration-200 mb-4">
          Expertises
        </h1>
        <h1 className="cursor-pointer text-[#e5b45e] transition-colors duration-200 mb-4">
          The Team
        </h1>
        <h1 className="cursor-pointer text-[#e5b45e] transition-colors duration-200">
          Contact
        </h1>
      </div>
    </>
  );
};

export default Navbar;
