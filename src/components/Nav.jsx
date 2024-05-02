import React, { useState } from 'react';
import { shopping, menu } from '../assets/icons';


const Nav = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header>
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <p className="bg-primary text-white text-sm text-center">30% OFF ALL ORDERS UNTIL 4/27</p>  
      <div className="container mx-auto p-4 flex items-center justify-center">
        
        <button className="md:hidden" onClick={toggleMenu}>
          <img src={menu} alt="Menú" width={24} height={24} />
        </button>

        <ul className={`flex flex-col md:flex-row items-center ml-52 ${isMenuOpen ? 'block' : 'hidden'} md:flex justify-center md:space-x-16`}> 
          <li>
            <a href="#home" className="text-primary hover:border-b-2 hover:border-green-600 transition">Home</a>
          </li>
          <li>
            <a href="#items" className="text-primary hover:border-b-2 hover:border-green-600 transition">item1</a>
          </li>
          <li>
            <a href="#items" className="text-primary hover:border-b-2 hover:border-green-600 transition">item2</a>
          </li>
          <li>
            <a href="#items" className="text-primary hover:border-b-2 hover:border-green-600 transition">item3</a>
          </li>
          <li>
            <a href="#items" className="text-primary hover:border-b-2 hover:border-green-600 transition">item4</a>
          </li>
        </ul>
        <div className="flex ml-auto"> 
          <button className="text-primary hover:text-green-700 transition" onClick={onCartClick}>
            <img src={shopping} alt="Carrito de compras" width={24} height={24} />
          </button>
        </div>
      </div>
    </nav>
  </header>
);
};

export default Nav;