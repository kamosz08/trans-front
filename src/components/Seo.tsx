import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Props = {
  title: string;
  description?: string;
}

const query = graphql`
  {
    site {
      siteMetadata {
        siteDesc: description
        siteTitle: title
      }
    }
  }
`;

export const SEO = ({ title, description }: Props) => {
  const { site } = useStaticQuery(query);
  const {
    siteDesc, siteTitle,
  } = site.siteMetadata;

  return (
    <Helmet
      title={`${title} | ${siteTitle}`}
      htmlAttributes={{ lang: 'pl' }}
    >
      <meta
        name="description"
        content={description || siteDesc}
      />
    </Helmet>
  );
};
