'use client';

import React from 'react';

interface ChartData {
  name: string;
  value: number;
}

interface OperationTileChartProps {
  data: ChartData[];
}

export const OperationTileChart: React.FC<OperationTileChartProps> = ({ data }) => {
  // Find the maximum value to normalize heights
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="h-24 w-full flex items-end justify-between gap-1 mt-4">
      {data.map((item, index) => {
        const height = (item.value / maxValue) * 100;
        return (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-teal-500/20 rounded-t"
              style={{ height: `${height}%` }}
            >
              <div 
                className="w-full bg-teal-500 rounded-t transition-height duration-500"
                style={{ height: `${height}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};