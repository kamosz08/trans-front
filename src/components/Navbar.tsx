import React from 'react';
import styled from '@emotion/styled';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
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
  padding: 8px 32px;
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
`;

export const Navbar: React.FC = () => (
  <NavbarWrapper>
    <NavbarInnerWrapper>
      <Box
        maxWidth="160px"
      >
        <StaticImage
          src="../images/logo_no_text.png"
          alt="logo"
          layout="constrained"
          width={48}
          quality={100}
          placeholder="blurred"
        />

      </Box>
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
