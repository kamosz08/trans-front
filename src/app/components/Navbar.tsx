import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: rgba(1,1,1,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarInnerWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navbar: React.FC = () => (
  <NavbarWrapper>
    <NavbarInnerWrapper>
      <Link to="/app">Main</Link>
      <Link to="/app/register">Register</Link>
      <Link to="/app/register">Register</Link>
      <Link to="/">Landing page</Link>
    </NavbarInnerWrapper>
  </NavbarWrapper>
);
