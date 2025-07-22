import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const Toggle = () => {
    setOpen(!open);
  };

  const HandleContact =() => {
    const PhoneNumber = '2348139188264';
    const url = `https://wa.me/${PhoneNumber}`;
    window.open(url, '_blank');
  }

  return (
    <>
      <nav className='container lg:px-16 mx-auto shadow py-3'>
        <div className='flex justify-between items-center'>
          {/* Logo and Site Title */}
          <div className='flex items-center gap-3'>
            <div className='bg-[#A53DFF] w-8 flex items-center justify-center h-8 rounded-full'>P</div>
            <h1 className='font-bold'>Promise</h1>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <GiHamburgerMenu
            className="text-3xl lg:hidden cursor-pointer"
            onClick={Toggle}
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label="Toggle navigation menu"
          />

          {/* Mobile Menu Overlay (Clickable Backdrop) */}
          {open && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={Toggle}
              aria-hidden="true"
            ></div>
          )}

          {/* Navigation Links */}
          <ul
            id="main-navigation"
            className={`
              ${open ? 'flex' : 'hidden'}
              flex-col items-center gap-6
              w-full absolute top-20 left-0 bg-white text-black shadow-md p-4 z-50 /* Mobile styles */
              text-lg font-medium 

              lg:flex lg:flex-row lg:gap-20
              lg:static lg:w-auto lg:p-0 lg:shadow-none lg:bg-transparent /* Desktop positioning and styling */
            `}
          >
            <li><NavLink to={"/Home"} onClick={Toggle}>Home</NavLink></li>
            <li><NavLink to={"/About"} onClick={Toggle}>About</NavLink></li>
            <li><NavLink to={"/Process"} onClick={Toggle}>Process</NavLink></li>
            <li><NavLink to={"/portfolio"} onClick={Toggle}>Portfolio</NavLink></li>
            <li><NavLink to={"/Blog"} onClick={Toggle}>Blog</NavLink></li>
            <li><NavLink to={"/Skill"} onClick={Toggle}>Services</NavLink></li>
            <li><NavLink className="bg-[#A53DFF] py-1 px-5 rounded text-white"  onClick={HandleContact}>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}