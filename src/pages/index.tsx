import * as React from 'react';
import config from 'react-reveal/globals';

import { Layout } from '@components/Layout';
import { Header } from '@components/index/Header';
import { MainPageContent } from '@components/index/MainPageContent';
import { SEO } from '@components/Seo';

config({ ssrFadeout: true });

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Trans Home Page"
    />
    <Header />
    <MainPageContent />
  </Layout>
);

export default IndexPage;
