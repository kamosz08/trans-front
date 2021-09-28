import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Box } from './styled/Box';

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
