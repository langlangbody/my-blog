import * as React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import {RootLayout} from '../Layout'

export default class NotFoundPage extends React.Component<any> {
  public render() {
    return (
      <RootLayout>
        <Helmet title={`404 not found | ${config.siteTitle}`} />
        <div>about</div>
      </RootLayout>
    );
  }
}
