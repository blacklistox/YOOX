import React from 'react';
import { 
  LayoutDashboard, 
  FileBarChart, 
  AlertTriangle, 
  FileText, 
  Users, 
  Settings, 
  LogOut,
  BookOpen
} from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img 
            src="https://pdsb.co.id/wp-content/uploads/2022/01/logo-pdsb.png" 
            alt="Panin Dubai Syariah Bank" 
            className="h-8"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white">
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
            <AlertTriangle className="mr-3 h-5 w-5 text-gray-500" />
            Monitoring Audit
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
            <FileBarChart className="mr-3 h-5 w-5 text-gray-500" />
            Laporan & Statistik
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
            <FileText className="mr-3 h-5 w-5 text-gray-500" />
            Dokumen Regulasi
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
            <BookOpen className="mr-3 h-5 w-5 text-gray-500" />
            Perpustakaan Syariah
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
            <Users className="mr-3 h-5 w-5 text-gray-500" />
            Manajemen Pengguna
          </a>
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <nav className="px-2 space-y-1">
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
            <Settings className="mr-3 h-5 w-5 text-gray-500" />
            Pengaturan
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100">
            <LogOut className="mr-3 h-5 w-5 text-gray-500" />
            Keluar
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;