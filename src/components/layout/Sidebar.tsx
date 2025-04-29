
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Truck, MapPin, List, Settings, Info } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/' },
    { name: 'Collection Requests', icon: <List className="w-5 h-5" />, path: '/requests' },
    { name: 'Truck Monitoring', icon: <Truck className="w-5 h-5" />, path: '/trucks' },
    { name: 'Waste Bins', icon: <MapPin className="w-5 h-5" />, path: '/bins' },
    { name: 'About', icon: <Info className="w-5 h-5" />, path: '/about' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/settings' },
  ];

  return (
    <aside className="fixed top-[61px] left-0 z-40 w-64 h-[calc(100vh-61px)] transition-transform -translate-x-full sm:translate-x-0 bg-white border-r border-gray-200" aria-label="Sidebar">
      <div className="h-full py-4 overflow-y-auto">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center p-2 text-base font-normal rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-primary text-white'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
