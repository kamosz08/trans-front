import React from 'react';
import { theme } from '../theme';
import { Box } from './styled/Box';

export const Footer: React.FC = () => (
  <Box
    width="100%"
    height="128px"
    backgroundColor={theme.colors.darkGrey}
    display="flex"
    justifyContent="center"
  >
    <Box
      maxWidth="1080px"
      padding="32px 32px"
      color="white"
      textAlign="center"
    >
      Made for educational purposes 2021
      <br />
      <Box mt="8px">Github link</Box>
    </Box>
  </Box>
);
