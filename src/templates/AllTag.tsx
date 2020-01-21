import React from 'react';
import Helmet from 'react-helmet';
import { RootLayout } from '../Layout';

import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';

export default class AllTagTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { tags } = this.props.pathContext;
    if (tags) {
      return (
        <RootLayout>
          <Helmet title={`Tags | ${config.siteTitle}`} />
          <div>Tags</div>
        </RootLayout>
      );
    }
  }
}
