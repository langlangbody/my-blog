import React from 'react';
import { Link, graphql } from 'gatsby';
import { Article } from '../components/Article';
import { RootLayout } from '../Layout';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Data from '../models/Data';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

export default class BlogPage extends React.Component<Props> {
  public render() {
    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;

    return (
      <RootLayout>
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <p>{totalCount}</p>
        <div>
          {edges.map(post => (
            <Article
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              category={post.node.frontmatter.category}
              key={post.node.fields.slug}
            />
          ))}
        </div>
      </RootLayout>
    );
  }
}
export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            category
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
