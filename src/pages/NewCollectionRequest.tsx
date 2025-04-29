
import React from 'react';
import PageLayout from "@/components/layout/PageLayout";
import CollectionRequestForm from '@/components/collection/CollectionRequestForm';

const NewCollectionRequest = () => {
  return (
    <PageLayout>
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Create New Collection Request</h1>
          <p className="text-gray-500 mt-2">
            Fill out the form below to request a waste collection
          </p>
        </div>
        <CollectionRequestForm />
      </div>
    </PageLayout>
  );
};

export default NewCollectionRequest;
