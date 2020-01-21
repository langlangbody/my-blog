import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';
import { RootLayout} from '../Layout'
export default class AllCategoryTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { categories } = this.props.pathContext;
    if (categories) {
      return (
        <RootLayout>
          <Helmet title={`Categories | ${config.siteTitle}`} />
          <div>Categories</div>
        </RootLayout>
      );
    }
  }
}
