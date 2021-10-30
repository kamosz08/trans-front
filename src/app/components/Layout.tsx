import React from 'react';
import { ContentContainer } from './ContentContainer';
import { Sidebar } from './Sidebar';

export const Layout: React.FC = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <ContentContainer />
    {/* {children} */}
  </div>
);
