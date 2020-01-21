import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {Provider} from 'mobx-react'
import { ThemeProvider } from 'styled-components';
import { Layout, Switch, Affix } from 'antd';
import { observer } from 'mobx-react';
import SiderBar from './Sider/Sider';
import theme from '../../config/Theme';
import { SEO } from '../components/Seo';
import Store from '@/stores'
import './layout.scss';

const { Content, Footer } = Layout;

/**
 * @doc 切换侧边栏主题的状态
 */

@observer
export class RootLayout extends React.PureComponent<{}> {
  
  ThemeSwitch = () =>{
    const store = Store.SetTingStore
    console.log('Store',store);
    
    return (
      <Affix style={{ position: 'absolute', top: '30px', right: '20px' }}>
        <Switch checkedChildren={'夜'} unCheckedChildren={'白'} onChange={() => store.setSiderTheme()} defaultChecked />
      </Affix>
    )
  }

  public render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              buildTime(formatString: "YYYY-MM-DD")
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <SEO />
            <Provider store={Store}>
            <React.Fragment>
              <Layout style={{ minHeight: '100vh' }}>
                <SiderBar store={ Store } />
                <Layout>
                  {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                  { this.ThemeSwitch() }
                  <Content style={{ margin: '0 16px' }}>{children}</Content>
                  <Footer style={{ textAlign: 'center' }}>页脚部分</Footer>
                </Layout>
              </Layout>
            </React.Fragment>
            </Provider>
          </ThemeProvider>
        )}
      />
    );
  }
}
