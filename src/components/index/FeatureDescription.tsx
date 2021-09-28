/* eslint-disable react/require-default-props */
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Box } from '../styled/Box';
import { Information } from './Information';

type Props = {
  imageFirst?: boolean;
  title: string;
  description: string;
  imageComponent: JSX.Element;
}

export const FeatureDescription: React.FC<Props> = ({
  imageFirst = false, title, description, imageComponent,
}) => {
  const infoComponent = (
    <Information
      title={title}
      description={description}
    />
  );

  return (
    <Zoom>
      <Box
        display="flex"
        maxWidth="960px"
        marginLeft="auto"
        marginRight="auto"
        marginTop="64px"
      >
        <Box
          flex="1"
          display="flex"
          alignItems="center"
        >
          {!imageFirst ? infoComponent : imageComponent}
        </Box>
        <Box
          flex="1"
          display="flex"
          alignItems="center"
        >
          {imageFirst ? infoComponent : imageComponent}
        </Box>
      </Box>
    </Zoom>
  );
};
