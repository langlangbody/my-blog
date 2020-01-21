import * as React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import {RootLayout} from '@/Layout'

export default class AboutPage extends React.Component<any> {
  public render() {
    return (
      <RootLayout>
        <Helmet title={`关于我们 | ${config.siteTitle}`} />
        <div>关于我们</div>
      </RootLayout>
    );
  }
}
