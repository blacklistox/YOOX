import React, { useState } from 'react';
import { AuditFinding } from '../types';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface AuditTableProps {
  findings: AuditFinding[];
}

const AuditTable: React.FC<AuditTableProps> = ({ findings }) => {
  const [sortField, setSortField] = useState<keyof AuditFinding>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  const handleSort = (field: keyof AuditFinding) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const sortedFindings = [...findings].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue) 
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Terbuka</span>;
      case 'Closed':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Selesai</span>;
      case 'In Progress':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Dalam Proses</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };
  
  const getRiskLevelBadge = (level: string) => {
    switch (level) {
      case 'High':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Tinggi</span>;
      case 'Moderate':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Sedang</span>;
      case 'Low':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Rendah</span>;
      case 'Patuh Dengan Catatan':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Patuh Dengan Catatan</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">{level}</span>;
    }
  };
  
  // Mobile card view for each finding
  const renderMobileCard = (finding: AuditFinding) => (
    <div key={finding.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-3">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-gray-900">{finding.auditee}</h4>
        <div>{getStatusBadge(finding.status)}</div>
      </div>
      <p className="text-sm text-gray-800 mb-2">{finding.finding}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        <div className="text-xs text-gray-600">Tahun: <span className="font-medium">{finding.year}</span></div>
        <div className="text-xs text-gray-600">Risiko: <span>{getRiskLevelBadge(finding.riskLevel)}</span></div>
      </div>
      <div className="text-xs text-gray-500">
        {format(new Date(finding.date), 'dd MMM yyyy', { locale: id })}
      </div>
    </div>
  );
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Temuan Audit Terbaru</h3>
        <div className="flex items-center space-x-2">
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </button>
          <button className="text-sm text-pdsb-green-500 hover:text-pdsb-green-600">
            Lihat Semua
          </button>
        </div>
      </div>
      
      {/* Mobile view */}
      <div className="md:hidden">
        {sortedFindings.map(renderMobileCard)}
      </div>
      
      {/* Desktop view */}
      <div className="hidden md:block flex-1 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('year')}
              >
                <div className="flex items-center">
                  Tahun
                  {sortField === 'year' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('auditee')}
              >
                <div className="flex items-center">
                  Auditee
                  {sortField === 'auditee' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('finding')}
              >
                <div className="flex items-center">
                  Temuan
                  {sortField === 'finding' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('riskLevel')}
              >
                <div className="flex items-center">
                  Level Risiko
                  {sortField === 'riskLevel' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center">
                  Tanggal
                  {sortField === 'date' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center">
                  Status
                  {sortField === 'status' && (
                    sortDirection === 'asc' ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedFindings.map((finding) => (
              <tr key={finding.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {finding.year}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {finding.auditee}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {finding.finding}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getRiskLevelBadge(finding.riskLevel)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(finding.date), 'dd MMM yyyy', { locale: id })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(finding.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditTable;