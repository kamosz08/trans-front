import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNavigation } from './TopNavigation';

export const Layout: React.FC = ({ children }) => (
  <div className="relative min-h-screen flex">
    <Sidebar />
    <div className="bg-gray-300 dark:bg-gray-700 min-h-screen w-full text-gray-700 dark:text-gray-200">
      <TopNavigation />
      {children}
    </div>
  </div>
);
