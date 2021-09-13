import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
import { Layout } from '../components/Layout';

config({ ssrFadeout: true });

const IndexPage = (props: PageProps) => {
  console.log(props);

  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <Link to="/app">Try it now</Link>
        asdasdasd
        asdasd
        {Array(100).fill(1).map((item, idx) => <div>{idx}</div>)}
        <Zoom>
          <p>Markup that will be revealed on scroll</p>
        </Zoom>
      </main>
    </Layout>
  );
};

export default IndexPage;
