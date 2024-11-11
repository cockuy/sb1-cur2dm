import React, { useState } from 'react';
import { Package2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Package2 className="h-8 w-8 text-violet-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              SwiftWings
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-violet-600 transition">Services</a>
            <a href="#features" className="text-gray-600 hover:text-violet-600 transition">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-violet-600 transition">Testimonials</a>
            <button className="bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-violet-600">Services</a>
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-violet-600">Features</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-violet-600">Testimonials</a>
            <button className="w-full mt-2 bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}