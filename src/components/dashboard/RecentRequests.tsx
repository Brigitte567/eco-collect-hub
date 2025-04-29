
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Request {
  id: number;
  address: string;
  date: string;
  status: 'pending' | 'in-progress' | 'completed' | 'canceled';
  type: string;
}

const RecentRequests = () => {
  // Mock data for recent requests
  const requests: Request[] = [
    { id: 1001, address: '123 Main St, Apt 4B', date: '2025-04-28', status: 'completed', type: 'General' },
    { id: 1002, address: '456 Oak Ave', date: '2025-04-29', status: 'in-progress', type: 'Recyclable' },
    { id: 1003, address: '789 Pine Rd', date: '2025-04-30', status: 'pending', type: 'Organic' },
    { id: 1004, address: '321 Maple Dr', date: '2025-04-27', status: 'canceled', type: 'Hazardous' }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'canceled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Recent Collection Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">ID</th>
                <th scope="col" className="px-4 py-3">Address</th>
                <th scope="col" className="px-4 py-3">Date</th>
                <th scope="col" className="px-4 py-3">Type</th>
                <th scope="col" className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{request.id}</td>
                  <td className="px-4 py-3">{request.address}</td>
                  <td className="px-4 py-3">{new Date(request.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3">{request.type}</td>
                  <td className="px-4 py-3">
                    <Badge variant="outline" className={`${getStatusColor(request.status)} capitalize`}>
                      {request.status.replace('-', ' ')}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentRequests;
