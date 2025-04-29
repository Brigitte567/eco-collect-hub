
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import StatCard from '@/components/dashboard/StatCard';
import RequestForm from '@/components/dashboard/RequestForm';
import TruckMap from '@/components/dashboard/TruckMap';
import BinStatus from '@/components/dashboard/BinStatus';
import RecentRequests from '@/components/dashboard/RecentRequests';
import { List, Truck, MapPin, Check } from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="dashboard-grid mb-6">
          <StatCard 
            title="Total Requests" 
            value="142" 
            icon={<List className="w-6 h-6 text-white" />} 
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard 
            title="Active Trucks" 
            value="8" 
            icon={<Truck className="w-6 h-6 text-white" />} 
            color="bg-blue-500"
          />
          <StatCard 
            title="Monitored Bins" 
            value="24" 
            icon={<MapPin className="w-6 h-6 text-white" />} 
            color="bg-amber-500"
            trend={{ value: 4, isPositive: true }}
          />
          <StatCard 
            title="Collections Completed" 
            value="98" 
            icon={<Check className="w-6 h-6 text-white" />} 
            color="bg-green-500"
            trend={{ value: 8, isPositive: true }}
          />
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <TruckMap />
          </div>
          <div>
            <RequestForm />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BinStatus />
          <RecentRequests />
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
