import React from 'react';
import { Navbar } from './Navbar';

export const Layout: React.FC = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);
