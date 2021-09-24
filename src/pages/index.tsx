import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';

import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../components/Layout';
import { Header } from '../components/index/Header';
import { Box } from '../components/styled/Box';
import { Information } from '../components/index/Information';

config({ ssrFadeout: true });

const IndexPage = (props: PageProps) => {
  console.log(props);

  return (
    <Layout>
      <Header />

      <Zoom>
        <Box
          display="flex"
          maxWidth="960px"
          marginLeft="auto"
          marginRight="auto"
          marginTop="128px"
        >
          <Box
            flex="1"
            display="flex"
            alignItems="center"
          >
            <Information />
          </Box>
          <Box flex="1">
            <StaticImage
              src="../images/mobile.png"
              alt="future"
              layout="constrained"
              height={800}
              quality={100}
              placeholder="blurred"
            />
          </Box>
        </Box>
      </Zoom>

      <Zoom>
        <Box
          display="flex"
          maxWidth="960px"
          marginLeft="auto"
          marginRight="auto"
          marginTop="128px"
        >
          <Box flex="1">
            <StaticImage
              src="../images/money.png"
              alt="future"
              layout="constrained"
              height={800}
              quality={100}
              placeholder="blurred"
            />
          </Box>
          <Box
            flex="1"
            display="flex"
            alignItems="center"
          >
            <Information />
          </Box>
        </Box>
      </Zoom>

      <Zoom>
        <Box
          display="flex"
          maxWidth="960px"
          marginLeft="auto"
          marginRight="auto"
          marginTop="128px"
        >
          <Box
            flex="1"
            display="flex"
            alignItems="center"
          >
            <Information />
          </Box>
          <Box flex="1">
            <StaticImage
              src="../images/mobile2.png"
              alt="future"
              layout="constrained"
              height={800}
              quality={100}
              placeholder="blurred"
            />
          </Box>
        </Box>
      </Zoom>

      <Link to="/app">Try it now</Link>
      asdasdasd
      asdasd
      {Array(100).fill(1).map((item, idx) => <div>{idx}</div>)}
      <Zoom>
        <p>Markup that will be revealed on scroll</p>
      </Zoom>
    </Layout>
  );
};

export default IndexPage;
