'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { OperationTileChart } from './operation-tile-chart';
import { Operation, operations } from './operations-data';
import { OperationsChat } from './operations-chat';

const OperationsTile = ({ id, title, kpiValue, kpiLabel, timeframe, data, details }: Operation) => {
  const router = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Card 
        className="bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
        onClick={() => router.push(`/operations/${id}`)}
      >
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg font-semibold flex items-center justify-between">
            {title}
            <MessageCircle 
              className="h-5 w-5 text-teal-500 hover:text-teal-400"
              onClick={(e) => {
                e.stopPropagation();
                setIsChatOpen(true);
              }}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-teal-400">{kpiValue}</div>
            <div className="text-sm text-slate-400">{kpiLabel}</div>
            <div className="text-xs text-slate-500">{timeframe}</div>
            <OperationTileChart data={data} />
          </div>
        </CardContent>
      </Card>

      <OperationsChat 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        operationTitle={title}
        operationData={{ kpiValue, kpiLabel, timeframe, data, details }}
      />
    </>
  );
};

export default function OperationsDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-white">Operations Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {operations.map((op) => (
            <OperationsTile key={op.id} {...op} />
          ))}
        </div>
      </div>
    </div>
  );
}