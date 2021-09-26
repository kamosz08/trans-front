import React from 'react';

import { useCountUp } from 'react-countup';
import { Box } from '../styled/Box';

type Props = {
  secondaryText: string
} & Omit<Parameters<typeof useCountUp>[0], 'ref'>;

export const CounterStat: React.FC<Props> = ({ secondaryText, ...rest }) => {
  const countUpRef = React.useRef(null);
  useCountUp({
    ref: countUpRef,
    duration: 3,
    prefix: rest.end > 0 ? '+' : '',
    ...rest,
  });
  return (
    <Box
      textAlign="center"
      color="white"
      width="128px"
      ml="16px"
      mr="16px"
    >
      <Box
        fontSize="52px"
        fontWeight="900"
      >
        <span
          ref={countUpRef}
        />
        %
      </Box>
      <Box
        fontSize="14.5px"
        fontWeight="500"
      >
        {secondaryText}
      </Box>
    </Box>
  );
};
