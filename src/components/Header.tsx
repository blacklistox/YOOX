import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center">
        <button 
          className="md:hidden mr-4 text-gray-500 hover:text-gray-700 focus:outline-none" 
          onClick={onMenuToggle}
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-lg md:text-2xl font-bold text-gray-800 truncate">Dashboard Manajemen Data</h1>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Cari..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pdsb-green-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <button className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white">
            <User className="h-4 w-4 md:h-5 md:w-5" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">Admin Syariah</p>
            <p className="text-xs text-gray-500">admin@pdsb.co.id</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;