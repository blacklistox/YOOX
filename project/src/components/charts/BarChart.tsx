import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { BarChartData } from '../../types';

interface BarChartProps {
  data: BarChartData[];
  title: string;
}

const colorMap: Record<string, string> = {
  'Moderate': '#8B5A2B',
  'Moderate to High': '#D2B48C',
  'High': '#87CEEB',
  'Low to Moderate': '#FF6347',
  'Patuh Dengan Catatan': '#DDA0DD',
  'Low': '#FFD700'
};

const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} width={30} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="value" name="Jumlah Temuan" fill="#00A651" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;