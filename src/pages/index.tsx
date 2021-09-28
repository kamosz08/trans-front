import * as React from 'react';
import { PageProps } from 'gatsby';
import config from 'react-reveal/globals';

import { Layout } from '../components/Layout';
import { Header } from '../components/index/Header';
import { Features } from '../components/index/Features';

config({ ssrFadeout: true });

const IndexPage = (props: PageProps) => {
  console.log(props);

  return (
    <Layout>
      <Header />
      <Features />
    </Layout>
  );
};

export default IndexPage;
