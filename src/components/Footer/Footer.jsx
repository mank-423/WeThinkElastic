import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#151414] text-white text-[0.7rem] font-bold'>
      <div className='p-5 lg:p-10'>
        <ul className='flex flex-col items-center space-y-4 space-x-12 lg:flex-row lg:justify-between lg:space-y-0 xl:flex-row xl:justify-between xl:space-y-0'>
          <li className='lg:mr-auto xl:mr-auto ml-10'>© 2024 WETHINKELASTIC</li>
          <li>OUR ACTUS</li>
          <li>UNCAFE@WETHINKELASTIC.COM</li>
          <li>COOKIES</li>
          <li>LEGAL NOTICES</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
