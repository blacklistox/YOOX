import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { RiskData } from '../../types';

interface PieChartProps {
  data: RiskData[];
  title: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  // Responsive settings based on screen size
  const useSimpleLabels = window.innerWidth < 768;
  
  return (
    <div className="h-full w-full flex flex-col">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={!useSimpleLabels}
              outerRadius={useSimpleLabels ? 60 : 80}
              fill="#8884d8"
              dataKey="value"
              label={useSimpleLabels ? false : ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend 
              layout={useSimpleLabels ? "horizontal" : "vertical"} 
              verticalAlign={useSimpleLabels ? "bottom" : "middle"} 
              align={useSimpleLabels ? "center" : "right"}
              wrapperStyle={{ fontSize: useSimpleLabels ? '10px' : '12px' }}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;