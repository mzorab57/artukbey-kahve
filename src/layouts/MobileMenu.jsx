import React, { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react'

const MobileMenu = () => {

    const [isOpen, setOpen] = useState(false)
   
    
    
  return (
    <header className={`lg:hidden h-14 text-white`}>
      <div className="container place-self-end flex p-4  text-end">
        {/* <div className="text-2xl font-bold text-white">Logo</div> */}
        <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            duration={0.3}
            // easing="ease-in"
            // color="#eebd88"
            rounded
          />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black  transform ${
          isOpen ? 'translate-y-0 top-20' : 'translate-y-full'
        } transition-transform duration-500 ease-in-out z-50`}
      >
          
        <div className="flex justify-end p-4">
          <button onClick={()=> setOpen(!isOpen)} className="text-3xl">
        
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-4">
          <a href="/" onClick={()=> setOpen(!isOpen)} className="text-2xl hover:text-yellow-500">
            Home
          </a>
          <a href="about" onClick={()=> setOpen(!isOpen)} className="text-2xl hover:text-yellow-500">
            About
          </a>
          <a href="menu-coffee" onClick={()=> setOpen(!isOpen)} className="text-2xl hover:text-yellow-500">
            Menu
          </a>
          <a href="contacts" onClick={()=> setOpen(!isOpen)} className="text-2xl hover:text-yellow-500">
            Contacts
          </a>
          <a href="reservation" onClick={()=> setOpen(!isOpen)} className="text-2xl hover:text-yellow-500">
            Book a Table
          </a>
        </nav>
      </div>
    </header>
  );
};

export default MobileMenu;
