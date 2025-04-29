
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TruckMap = () => {
  // Mock data for truck positions
  const trucks = [
    { id: 1, lat: 40.712776, lng: -74.005974, status: 'active' },
    { id: 2, lat: 40.730610, lng: -73.935242, status: 'idle' },
    { id: 3, lat: 40.758896, lng: -73.985130, status: 'active' }
  ];
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Truck Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="map-container border bg-gray-100 flex items-center justify-center">
          {/* In a real implementation, this would be a map component */}
          <div className="text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-gray-500">Map showing {trucks.length} collection trucks</p>
            <p className="text-sm text-gray-400 mt-2">
              {trucks.filter(t => t.status === 'active').length} active, 
              {trucks.filter(t => t.status === 'idle').length} idle
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-2">
          {trucks.map(truck => (
            <div key={truck.id} className="flex items-center justify-between p-2 border rounded-md">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${truck.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse-slow`}></div>
                <span>Truck #{truck.id}</span>
              </div>
              <span className="text-sm font-medium capitalize">{truck.status}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TruckMap;
