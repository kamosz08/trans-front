import * as React from 'react';
import { PageProps } from 'gatsby';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

const IndexPage = (props: PageProps) => {
  console.log(props);

  return (
    <main>
      <title>Home Page</title>
      asdasdasd
      asdasd
      {Array(100).fill(1).map((item, idx) => <div>{idx}</div>)}
      <Zoom>
        <p>Markup that will be revealed on scroll</p>
      </Zoom>
    </main>
  );
};

export default IndexPage;
