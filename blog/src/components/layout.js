import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from 'styled-components';
import { GrayTheme } from './themes/Gray';
import Header from "./header";
import styled from 'styled-components';
import "./layout.css";

const Content = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`;

const Footer = styled.footer`
  margin-top: var(--space-5);
  font-size: var(--font-sm);
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={GrayTheme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Content>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </Content>
    </ThemeProvider>
  );
};

export default Layout;
