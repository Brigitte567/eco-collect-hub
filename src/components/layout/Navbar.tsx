
import React from 'react';
import { Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(location.pathname);
  
  // Don't render the navbar on auth pages
  if (isAuthPage) {
    return null;
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-primary rounded-full p-1.5 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </div>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-secondary">EcoCollect</span>
          </Link>
        </div>
        
        <div className="flex items-center lg:order-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-gray-500" />
            <span className="absolute top-1 right-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-xs font-bold text-white">3</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="ml-3">
            <User className="h-5 w-5 text-gray-500" />
          </Button>
          
          <Link to="/login">
            <Button variant="outline" size="sm" className="ml-4 hidden md:flex">
              Sign In
            </Button>
          </Link>
          
          <Link to="/register">
            <Button size="sm" className="ml-2 hidden md:flex">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
