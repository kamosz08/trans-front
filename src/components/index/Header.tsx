import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme';
import { Box } from '../styled/Box';
import { CounterStat } from './CounterStat';
import { Button } from '../styled/Button';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const WrapperWithBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 520px;
  background-color: ${theme.colors.blue};
`;

const Title = styled.p`
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 32px;
  color: #fbfbfbf2;
  font-size: 2.4rem;
  letter-spacing: 1.8px;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;

export const Header: React.FC = () => (
  <WrapperWithBackground>
    <Wrapper>
      <Title>
        Korzystaj z platformy
        <br />
        dostarczającej
        <br />
        najlepsze sewisy
      </Title>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <Button>Wypróbuj za darmo</Button>
      </Box>
      <Box
        mb="8px"
        mt="64px"
        display="flex"
        padding="8px 32px"
      >
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
    </Wrapper>
  </WrapperWithBackground>
);
