import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Box } from '@components/styled/Box';
import { theme } from '../theme';

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'white',
}));

const FooterText = styled.div`
  text-align: end;

  @media (max-width: 460px) {
    text-align: center;
  }
`;

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
      width="100%"
      padding="32px 32px"
      color="white"
      textAlign="center"
    >
      <StyledLink
        to="https://github.com/kamosz08/trans-front"
        target="_blank"
      >
        <StaticImage
          src="../images/github.png"
          alt="github"
          layout="constrained"
          width={32}
          quality={100}
          placeholder="blurred"
        />
        <Box mt="8px">Open Github repo</Box>
      </StyledLink>
      <FooterText>
        Made for educational purposes 2021
      </FooterText>
    </Box>
  </Box>
);
