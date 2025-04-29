
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Bin {
  id: number;
  location: string;
  fillLevel: number;
  lastCollection: string;
}

const BinStatus = () => {
  // Mock data for bins
  const bins: Bin[] = [
    { id: 1, location: 'Main Street', fillLevel: 25, lastCollection: '2025-04-25' },
    { id: 2, location: 'Park Avenue', fillLevel: 90, lastCollection: '2025-04-22' },
    { id: 3, location: 'West Boulevard', fillLevel: 50, lastCollection: '2025-04-24' },
    { id: 4, location: 'North Square', fillLevel: 75, lastCollection: '2025-04-23' }
  ];
  
  const getFillClass = (level: number) => {
    if (level < 30) return 'bin-low';
    if (level < 60) return 'bin-medium';
    if (level < 90) return 'bin-high';
    return 'bin-full';
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Waste Bin Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {bins.map((bin) => (
            <div key={bin.id} className="text-center">
              <div className="bin-status-indicator">
                <div className={`bin-fill ${getFillClass(bin.fillLevel)}`}></div>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium">{bin.location}</p>
                <p className={`text-sm font-bold ${bin.fillLevel > 75 ? 'text-red-500' : ''}`}>
                  {bin.fillLevel}% Full
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Last collection: {new Date(bin.lastCollection).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BinStatus;
