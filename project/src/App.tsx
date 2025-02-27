import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import NewsCard from './components/NewsCard';
import AuditTable from './components/AuditTable';
import PieChart from './components/charts/PieChart';
import BarChart from './components/charts/BarChart';
import KpiCard from './components/KpiCard';
import MobileNav from './components/MobileNav';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  FileBarChart2 
} from 'lucide-react';

import { 
  newsItems, 
  auditFindings, 
  riskTypeData, 
  riskRatingData, 
  monthlyFindingsData,
  kpiData,
  totalFindings,
  openFindings,
  closedFindings
} from './data/mockData';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 font-manrope">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Mobile Navigation - visible only on mobile */}
      <div className="md:hidden">
        <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Dashboard Monitoring Audit</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <StatCard 
                title="Total Temuan" 
                value={totalFindings} 
                icon={FileBarChart2}
                color="gradient-green"
                trend={{ value: 5, isPositive: false }}
              />
              
              <StatCard 
                title="Temuan Terbuka" 
                value={openFindings} 
                icon={AlertTriangle}
                color="gradient-red"
                trend={{ value: 2, isPositive: false }}
              />
              
              <StatCard 
                title="Temuan Selesai" 
                value={closedFindings} 
                icon={CheckCircle}
                color="gradient-blue"
                trend={{ value: 8, isPositive: true }}
              />
              
              <StatCard 
                title="Dalam Proses" 
                value={totalFindings - openFindings - closedFindings} 
                icon={Clock}
                color="gradient-yellow"
                trend={{ value: 3, isPositive: true }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-sm p-4 md:p-6 gradient-border h-80 md:h-96">
              <BarChart 
                data={monthlyFindingsData} 
                title="Tren Temuan Audit Bulanan" 
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 gradient-border h-80 md:h-96">
              <NewsCard news={newsItems} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 gradient-border h-80">
              <PieChart 
                data={riskTypeData} 
                title="Tipe Risiko" 
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 gradient-border h-80">
              <PieChart 
                data={riskRatingData} 
                title="Rating Risiko" 
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 gradient-border h-80 md:col-span-2 lg:col-span-1">
              <KpiCard data={kpiData} />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 gradient-border overflow-x-auto">
            <AuditTable findings={auditFindings} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;