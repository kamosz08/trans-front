import React from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { Button } from '@components/styled/Button';
import { Box } from '@components/styled/Box';
import { CounterStat } from './CounterStat';

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
  <div className="w-full flex justify-center min-h-[520px] bg-gray-900">
    <div className="flex flex-wrap justify-center align-baseline w-full max-w-7xl">
      <Title>
        Use the platform
        <br />
        providing
        <br />
        best services
      </Title>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        mt="32px"
      >
        <Button
          className="bg-blue-600"
          onClick={() => { navigate('/app/login'); }}
        >
          Try it now for free
        </Button>
      </Box>
      <CountersWrapper>
        <CounterStat
          secondaryText="increase in profits"
          start={0}
          end={25}
        />
        <CounterStat
          secondaryText="fewer calls to drivers"
          start={0}
          end={-40}
        />

        <CounterStat
          secondaryText="increase in vehicle occupancy"
          start={0}
          end={15}
        />
        <CounterStat
          secondaryText="reduction of fuel consumption"
          start={0}
          end={-25}
        />
      </CountersWrapper>
    </div>
  </div>
);
