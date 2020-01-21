import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { RootLayout } from '../Layout';
import SearchBar from '../components/Search'
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import _ from 'lodash';



const GridRow: any = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

function getRandomInt(max: any, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query: any) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}
export default class IndexPage extends React.Component<PageProps> {
  state = {
    dataSource: [
      {
        category: '文章列表1',
        name: 'showtext1',
      },
      {
        category: '文章列表2',
        name: 'showtext2',
      },
      {
        category: '文章列表3',
        name: 'showtext3',
      },
    ],
    engines: [
      {
        image: 'https://file.ipadown.com/tophub/assets/images/logo.png',
        name: 'github',
        url: 'https://github.com/search?utf8=%E2%9C%93&q=',
      },
      {
        image: 'https://file.ipadown.com/tophub/assets/images/logo.png',
        name: '百度',
        url: 'https://www.baidu.com/s?ie=utf-8&f=8&wd=',
      },
    ],
  };

  onSelect(value: any) {
    console.log('onSelect', value);
  }

  handleSearch = (value: any) => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  };

  public render() {
    // const { data } = this.props;
    // const { totalCount } = data.allMarkdownRemark;
    // const { dataSource, engines } = this.state;

    return (
      <RootLayout>
        <Helmet title={`首页 | ${config.siteTitle}`} />
        <GridRow>
         <SearchBar />
        </GridRow>
      </RootLayout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
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
          timeToRead
        }
      }
    }
  }
`;
