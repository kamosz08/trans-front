import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { theme } from '../theme';

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: rgba(1,1,1,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  font-size: large;
  text-transform: uppercase;
`;

const NavbarInnerWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  &:hover {
    color: ${theme.colors.primary}
  }
`;

export const Navbar: React.FC = () => (
  <NavbarWrapper>
    <NavbarInnerWrapper>
      <NavbarLink to="/404">Item 1</NavbarLink>
      <NavbarLink to="/404">Item 2</NavbarLink>
      <NavbarLink to="/404">Item 3</NavbarLink>
    </NavbarInnerWrapper>
  </NavbarWrapper>
);
