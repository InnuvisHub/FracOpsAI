'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { OperationTileChart } from '@/components/dashboard/operation-tile-chart';
import { operations } from '@/components/dashboard/operations-data';

export default function OperationDetail() {
  const params = useParams();
  const router = useRouter();
  const operation = operations.find(op => op.id === params.id);

  if (!operation) {
    return (
      <div className="min-h-screen bg-slate-950 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-white">Operation not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </button>
        
        <h1 className="text-3xl font-bold text-white">{operation.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-teal-400">{operation.kpiValue}</div>
                  <div className="text-sm text-slate-400">{operation.kpiLabel}</div>
                  <div className="text-xs text-slate-500">{operation.timeframe}</div>
                </div>
                <div className="h-48">
                  <OperationTileChart data={operation.data} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {operation.details?.map((detail, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-sm text-slate-400">{detail.label}</div>
                      <div className="text-xl font-semibold text-white">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}