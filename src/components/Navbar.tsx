import React from 'react';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';
import { theme } from '../theme';
import { Button } from './styled/Button';
import { Box } from './styled/Box';

const NavbarWrapper = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: ${theme.colors.blue};
`;

const NavbarInnerWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLink = styled(Link)<{isActive: boolean}>`
  position: relative;
  font-size: large;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-left: 64px;
  padding-bottom: 4px;
  color: ${(props) => (props.isActive ? '#ffffff' : '#ffffffb7')};

  &:hover { 
    color: #ffffff;
  }
  /* &:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    visibility: hidden;
    height: 2.5px;
    left: 50%;
    position: absolute;
    background: ${theme.colors.primary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    border-radius: 8px;
    width: 0px;
  }
  &:hover:after { 
    visibility: visible;
    width: 100%; 
    left: 0; 
  } */
`;

export const Navbar: React.FC = () => (
  <NavbarWrapper>
    <NavbarInnerWrapper>
      <Box>Left</Box>
      <Box>
        <NavbarLink
          to="/404"
          isActive
        >
          Features
        </NavbarLink>
        <NavbarLink
          to="/404"
          isActive={false}
        >
          About
        </NavbarLink>
        <NavbarLink
          to="/404"
          isActive={false}
        >
          Contact
        </NavbarLink>
        <Button
          ml="128px"
          onClick={() => { navigate('/login'); }}
        >
          Login
        </Button>
      </Box>

    </NavbarInnerWrapper>
  </NavbarWrapper>
);
