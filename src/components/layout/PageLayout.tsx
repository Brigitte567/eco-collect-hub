
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      
      <main className="p-4 sm:ml-64 pt-[77px]">
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
