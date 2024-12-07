import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul className={styles.list}>
      {data.allContentfulBlogPost.edges.map(({ node }) => {
        const image = getImage(node.heroImage);
        return (
          <li key={node.id}>
            {/* Blog Post Hero Image */}
            <GatsbyImage image={image} alt={node.title} />
            {/* Blog Post Title with Link */}
            <h2>
              <Link to={node.slug}>{node.title}</Link>
            </h2>
            {/* Blog Post Body Excerpt */}
            <p>{node.body.childMarkdownRemark.excerpt}</p>
          </li>
        );
      })}
    </ul>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
