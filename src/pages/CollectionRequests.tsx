
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/layout/PageLayout";
import { CollectionRequest } from '@/types/CollectionRequest';

// Mock data for demonstration purposes
const mockRequests: CollectionRequest[] = [
  {
    id: '1',
    user_id: 'user-1',
    bin_id: 'bin-123',
    status: 'pending',
    created_at: '2025-04-27T10:30:00Z',
    address: '123 Main St, Cityville',
    notes: 'Please collect before noon'
  },
  {
    id: '2',
    user_id: 'user-1',
    bin_id: 'bin-456',
    status: 'in_progress',
    created_at: '2025-04-26T08:15:00Z',
    address: '456 Oak Ave, Townsburg',
    notes: 'Gate code: 1234'
  },
  {
    id: '3',
    user_id: 'user-2',
    bin_id: 'bin-789',
    status: 'completed',
    created_at: '2025-04-25T14:45:00Z',
    updated_at: '2025-04-25T16:20:00Z',
    address: '789 Pine Rd, Villageton',
    notes: null
  },
];

const statusColors = {
  pending: "yellow",
  in_progress: "blue",
  completed: "green",
};

const CollectionRequests = () => {
  const [requests, setRequests] = useState<CollectionRequest[]>(mockRequests);

  const handleDeleteRequest = (id: string) => {
    // In a real app, this would call the delete API endpoint
    console.log(`Deleting request with ID: ${id}`);
    
    // Update local state to remove the request
    setRequests(requests.filter(request => request.id !== id));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Collection Requests</h1>
          <Link to="/new-request">
            <Button>New Request</Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Requests</CardTitle>
            <CardDescription>Manage your waste collection requests</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Bin ID</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.bin_id}</TableCell>
                    <TableCell>{request.address}</TableCell>
                    <TableCell>{request.created_at && formatDate(request.created_at)}</TableCell>
                    <TableCell>
                      <Badge variant={
                        request.status === 'completed' 
                          ? 'success' 
                          : request.status === 'in_progress' 
                            ? 'default' 
                            : 'secondary'
                      }>
                        {request.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Link to={`/edit-request/${request.id}`}>
                          <Button variant="outline" size="sm">Edit</Button>
                        </Link>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => handleDeleteRequest(request.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default CollectionRequests;
