import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';
import { StaticImage } from 'gatsby-plugin-image';
import { Box } from '@components/styled/Box';

export const OpinionsCarousel = () => (
  <Fade>
    <Box
      width="100%"
      backgroundColor="#37465A"
      minHeight="240px"
      pt="32px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        maxWidth="960px"
        width="100%"
        color="white"
        mb="-16px"
      >
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
        >
          <Box
            pb="32px"
            pt="8px"
            pl="64px"
            pr="64px"
            mb="8px"
          >
            <Box mb="16px">
              <StaticImage
                src="../../images/avatar1.png"
                alt="avatar"
                layout="constrained"
                width={96}
                quality={100}
                placeholder="blurred"
              />
            </Box>
            <Box fontStyle="italic">&bdquo;Easy-to-use, intuitive system. It significantly improves transport management.&quot;</Box>
          </Box>
          <Box
            pb="32px"
            pt="8px"
            pl="64px"
            pr="64px"
            mb="8px"
          >
            <Box mb="16px">
              <StaticImage
                src="../../images/avatar2.png"
                alt="avatar"
                layout="constrained"
                width={96}
                quality={100}
                placeholder="blurred"
              />
            </Box>
            <Box fontStyle="italic">&bdquo;I wish we had introduced this system sooner. It supports the management of the entire transport company.&quot;</Box>
          </Box>
          <Box
            pb="32px"
            pt="8px"
            pl="64px"
            pr="64px"
            mb="8px"
          >
            <Box mb="16px">
              <StaticImage
                src="../../images/avatar3.png"
                alt="avatar"
                layout="constrained"
                width={96}
                quality={100}
                placeholder="blurred"
              />
            </Box>
            <Box fontStyle="italic">&bdquo;Since we have been using the system, we have noticed a clear decrease in the number of calls made by drivers regarding delivery or pickup. Thanks to this, we can focus on other tasks.&quot;</Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  </Fade>
);
