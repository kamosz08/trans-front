import React from 'react';
import { Box } from '@components/styled/Box';
import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';

export const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <Box
      mb={4}
      minHeight="calc(100vh - 224px)"
    >
      {children}
    </Box>
    <Footer />
  </>
);
