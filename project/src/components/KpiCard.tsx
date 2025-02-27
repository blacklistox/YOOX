import React from 'react';
import ProgressBar from './charts/ProgressBar';

interface KpiItem {
  name: string;
  target: number;
  actual: number;
}

interface KpiCardProps {
  data: KpiItem[];
}

const KpiCard: React.FC<KpiCardProps> = ({ data }) => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Indikator Kinerja Utama</h3>
      
      <div className="flex-1 space-y-4">
        {data.map((item, index) => (
          <ProgressBar
            key={index}
            title={item.name}
            value={item.actual}
            max={item.target}
            color={
              item.actual / item.target >= 0.9
                ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                : item.actual / item.target >= 0.7
                ? 'bg-gradient-to-r from-amber-400 to-yellow-500'
                : 'bg-gradient-to-r from-red-500 to-rose-500'
            }
          />
        ))}
      </div>
    </div>
  );
};

export default KpiCard;