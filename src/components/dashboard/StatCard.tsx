
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, color = 'bg-primary' }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-start">
          <div className="flex-1 p-6">
            <div className="text-sm font-medium text-gray-500">{title}</div>
            <div className="text-3xl font-bold mt-1">{value}</div>
            
            {trend && (
              <div className="flex items-center mt-2">
                <span className={`text-xs font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                </span>
                <span className="text-xs text-gray-500 ml-1">from last week</span>
              </div>
            )}
          </div>
          
          <div className={`${color} p-6 flex items-center justify-center w-16 h-16 rounded-bl-lg`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
