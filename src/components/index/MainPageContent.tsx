import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Box } from '@components/styled/Box';
import { FeatureDescription } from './FeatureDescription';
import { OpinionsCarousel } from './OpinionsCarousel';

const mobileImage = (
  <StaticImage
    src="../../images/mobile.png"
    alt="mobile"
    layout="constrained"
    height={800}
    quality={100}
    placeholder="blurred"
  />
);
const moneyImage = (
  <StaticImage
    src="../../images/money.png"
    alt="money"
    layout="constrained"
    height={800}
    quality={100}
    placeholder="blurred"
  />
);
const mobile2Image = (
  <StaticImage
    src="../../images/mobile2.png"
    alt="mobile"
    layout="constrained"
    height={800}
    quality={100}
    placeholder="blurred"
  />
);
const successImage = (
  <StaticImage
    src="../../images/success.png"
    alt="mobile"
    layout="constrained"
    height={800}
    quality={100}
    placeholder="blurred"
  />
);

export const MainPageContent: React.FC = () => (
  <Box>
    <FeatureDescription
      imageComponent={mobileImage}
      title="Route optimization"
      description="The system creates the most optimal delivery routes. By using artificial intelligence and data collected from other systems, it is able to reduce delivery costs."
    />
    <FeatureDescription
      imageComponent={mobile2Image}
      imageFirst
      title="Mobile fees"
      description="Thanks to the mobile version, you can buy roads for the entire fleet from anywhere. It is also possible to share the account with drivers so that they can do it themselves."
    />
    <OpinionsCarousel />
    <FeatureDescription
      imageComponent={successImage}
      title="Analysis of applications"
      description="Extensive reports and analyzes will allow you to draw important conclusions that can significantly affect the benefits. On their basis, many companies introduce a reward system that motivates their employees."
    />
    <FeatureDescription
      imageComponent={moneyImage}
      imageFirst
      title="It saves time and money"
      description="The main goal of the system is to optimize the work in order to save time and money. Calculating routes, assisting in managing orders, tracking vehicles and controlling their combustion, all in one place."
    />
  </Box>
);
