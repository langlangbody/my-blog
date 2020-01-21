import React from 'react';
import Helmet from 'react-helmet';
import { Article } from '../components/Article';
import { RootLayout } from '../Layout';
import config from '../../config/SiteConfig';
import kebabCase from 'lodash/kebabCase';
import PageProps from '../models/PageProps';

export default class Category extends React.PureComponent<PageProps> {
  public render() {
    const { posts, categoryName } = this.props.pathContext;
    const totalCount = posts ? posts.length : 0;
    const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${categoryName}"`;

    return (
      <RootLayout>
        <Helmet title={`${categoryName} | ${config.siteTitle}`} />
        <p>{subline}</p>
        <div>
          {posts
            ? posts.map((post: any, index) => (
                <Article
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  excerpt={post.excerpt}
                  slug={kebabCase(post.frontmatter.title)}
                  timeToRead={post.timeToRead}
                  category={post.frontmatter.category}
                  key={index}
                />
              ))
            : null}
        </div>
      </RootLayout>
    );
  }
}
