import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import CountUp, { useCountUp } from 'react-countup';
import { theme } from '../../theme';
import { Box } from '../styled/Box';
import { CounterStat } from './CounterStat';

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
  color: #fbfbfbf2;
  font-size: 2.4rem;
  letter-spacing: 1.8px;
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

          <Box
            mb="8px"
            mt="64px"
            display="flex"
            padding="8px 32px"
          >
            {/* <Card>
              <SecondaryTitle>What we do best</SecondaryTitle>
              <CardTitle>Fleet management</CardTitle>
            </Card>
            <Card>
              <SecondaryTitle>What we do best</SecondaryTitle>
              <CardTitle>Minimize fuel costs</CardTitle>
            </Card> */}
            <CounterStat
              secondaryText="wzrost zysków"
              start={0}
              end={25}
            />
            <CounterStat
              secondaryText="mniej telefonów do kierowców"
              start={0}
              end={-40}
            />
          </Box>
          <Box
            display="flex"
            padding="8px 32px"
          >
            <CounterStat
              secondaryText="wzrost obłożenia pojazdów"
              start={0}
              end={15}
            />
            <CounterStat
              secondaryText="redukcja zużycia paliwa"
              start={0}
              end={-25}
            />
          </Box>
        </Box>

      </Wrapper>
    </Box>

  </>
);
