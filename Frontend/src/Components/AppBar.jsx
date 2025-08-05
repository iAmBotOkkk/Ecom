import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ImportIcon } from 'lucide-react';





export const Appbar = ({ onSignupClick, onSigninClick, onAddShopClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Taza</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Contact
            </a>
            <button 
              onClick={onAddShopClick}
              className="cursor-pointer bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
            >
              Add Shop
            </button>
            <button 
              onClick={onSignupClick}
              className="border cursor-pointer border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200 font-medium"
            >
              Sign Up
            </button>
            <button 
              onClick={onSigninClick}
              className=" cursor-pointer text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              Sign In
            </button>
          </div>

        
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

    
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
                Contact
              </a>
              <button 
            
                className="cursor-pointer block w-full px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium text-center"
              >
                Add Shop
              </button>
              <button 
          
                className="cursor-pointer block w-full px-3 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors duration-200 font-medium text-center"
              >
                Sign Up
              </button>
              <button 
        
                className="cursor-pointer block w-full px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium text-center"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


