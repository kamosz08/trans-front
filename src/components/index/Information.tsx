import styled from '@emotion/styled';
import React from 'react';
import { Box } from '../styled/Box';

const Paragraph = styled.p`
  color: #37465a;
  font-size: 15px;
`;

const Title = styled.p`
  margin-bottom: 32px;
  color: #3B3B3B;
  font-size: 2rem;
  font-weight: 900;
  text-transform: capitalize;
`;

export const Information: React.FC = () => (
  <Box padding="16px 16px">
    <Title>
      Focus on what is really important
    </Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ea eum autem tempora repellat laboriosam illo debitis, veniam, laudantium
      ducimus vitae culpa velam possimus.
    </Paragraph>
  </Box>
);
