import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '@components/styled/Button';
import { Box } from '@components/styled/Box';
import { theme } from '../theme';

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
        <Button
          ml="128px"
          onClick={() => { navigate('/app/login'); }}
        >
          Zaloguj
        </Button>
      </Box>

    </NavbarInnerWrapper>
  </NavbarWrapper>
);
