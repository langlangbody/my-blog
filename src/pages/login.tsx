import * as React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import {RootLayout} from '../Layout'

export default class LoginPage extends React.Component<any> {
  public render() {
    return (
      <RootLayout>
        <Helmet title={`login | ${config.siteTitle}`} />
        <div>登录页</div>
      </RootLayout>
    );
  }
}
