"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CircularText from './CircularText';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/*AC CSXCDV FDSGBFDSACXAASZ Logo */}
        {/* <h1 className="text-2xl font-bold tracking-wide">🎨 Color Compliance Checker</h1> */}
        
  
        <CircularText
          text="🎨 Color * Compliance * Checker "
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <div onClick={()=>{navigate('/')}} className="hover:text-blue-400 transition cursor-pointer">Home</div>
          <div onClick={()=>{navigate('about')}} className="hover:text-blue-400 transition cursor-pointer">About</div>
          <div onClick={()=>{navigate('contact')}} className="hover:text-blue-400 transition cursor-pointer">Contact</div>
          <div onClick={()=>{navigate('profile')}} className="hover:text-blue-400 transition cursor-pointer">Profile</div>
          {/* <div href="#" className="hover:text-blue-400 transition">Services</div>
          <div href="#" className="hover:text-blue-400 transition">Contact</div> */}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-center py-4 space-y-4">
          <a onClick={()=>{navigate('/')}} className="block hover:text-blue-400 transition cursor-pointer">Home</a>
          <a onClick={()=>{navigate('about')}} className="block hover:text-blue-400 transition cursor-pointer">About</a>
          <a onClick={()=>{navigate('contact')}} className="block hover:text-blue-400 transition cursor-pointer">Contact</a>
          <a onClick={()=>{navigate('profile')}} className="block hover:text-blue-400 transition cursor-pointer">Profile</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
