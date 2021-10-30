import React from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { Button } from '@components/styled/Button';
import { Box } from '@components/styled/Box';
import { theme } from '../../theme';
import { CounterStat } from './CounterStat';

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
  min-height: 520px;
  background-color: ${theme.colors.blue};
`;

const CountersWrapper = styled.div`
  margin-bottom: 8px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  padding: 8px 32px;
  flex-wrap: wrap;

  @media (max-width: 460px) {
    display: none;
  }
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
        mt="32px"
      >
        <Button onClick={() => { navigate('/app/login'); }}>Wypróbuj za darmo</Button>
      </Box>
      <CountersWrapper>
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
      </CountersWrapper>
    </Wrapper>
  </WrapperWithBackground>
);
