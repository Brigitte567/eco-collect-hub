
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from "@/components/layout/PageLayout";
import CollectionRequestForm from '@/components/collection/CollectionRequestForm';
import { toast } from "sonner";

const EditCollectionRequest = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [requestData, setRequestData] = useState(null);

  useEffect(() => {
    // In a real app, this would fetch data from API
    // For demo purposes, we'll simulate an API call
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data for demonstration
        const mockData = {
          bin_id: "bin-123",
          address: "123 Main St, Cityville",
          notes: "Please collect before noon",
        };
        
        setRequestData(mockData);
      } catch (error) {
        console.error("Error fetching request data:", error);
        toast.error("Failed to load request data");
        navigate('/requests');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (loading) {
    return (
      <PageLayout>
        <div className="container mx-auto p-4 flex justify-center items-center h-64">
          <p className="text-lg">Loading request data...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Edit Collection Request</h1>
          <p className="text-gray-500 mt-2">
            Request ID: {id}
          </p>
        </div>
        <CollectionRequestForm editMode={true} initialData={requestData} />
      </div>
    </PageLayout>
  );
};

export default EditCollectionRequest;
