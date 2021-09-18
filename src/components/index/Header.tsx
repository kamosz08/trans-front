import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { theme } from '../../theme';
import { Box } from '../styled/Box';
import { Button } from '../styled/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 1400px;
  
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: -2.5px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Card = styled.div`
  width: 240px;
  height: 220px;
  border-radius: 16px;
  padding: 32px 32px;
  margin-right: 16px;
  background-color: ${theme.colors.secondaryBlue};
`;

const SecondaryTitle = styled.p`
  color: #cee0dfe0;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const CardTitle = styled.p`
  margin-top: 16px;
  color: #fbfbfbf2;
  font-size: 1.8rem;
  font-weight: 600;
`;

const Title = styled.p`
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 32px;
  margin-bottom: 32px;
  color: #fbfbfbf2;
  font-size: 2.2rem;
  font-weight: 600;
`;

export const Header: React.FC = () => (
  <>
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      height="520px"
      backgroundColor={theme.colors.blue}
    >
      <Wrapper>

        <ImageWrapper>
          <StaticImage
            src="../../images/buissness.png"
            alt="future"
            layout="constrained"
            width={800}
            quality={100}
            placeholder="blurred"
          />
        </ImageWrapper>

        <Box>
          <Title>
            Work with experts
            <br />
            who deliver
            <br />
            best services
          </Title>
          <Button
            ml="32px"
            mb="92px"
            onClick={() => { navigate('/register'); }}
          >
            Try it now
          </Button>
          <Box
            ml="32px"
            mb="-32px"
            display="flex"
          >
            <Card>
              <SecondaryTitle>What we do best</SecondaryTitle>
              <CardTitle>Fleet management</CardTitle>
            </Card>
            <Card>
              <SecondaryTitle>What we do best</SecondaryTitle>
              <CardTitle>Minimize fuel costs</CardTitle>
            </Card>
          </Box>
        </Box>

      </Wrapper>
    </Box>

  </>
);
