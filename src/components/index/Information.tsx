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

type Props = {
  title: string;
  description: string;
}

export const Information: React.FC<Props> = ({ title, description }) => (
  <Box padding="16px 16px">
    <Title>
      {title}
    </Title>
    <Paragraph>
      {description}
    </Paragraph>
  </Box>
);
