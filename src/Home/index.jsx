import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Footer from './Footer';
import './static/style';

// 不支持移动端
class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Header key="header" />
        <Banner key="banner" />
        <Page1 key="page1" />
        <Page2 key="page2" />
        {/* <Page3 key="page3" />
        <Page4 key="page4" /> */}
        <Footer key="footer" />
        <DocumentTitle title="上海洛哈纳网络科技有限公司" />
      </div>
    );
  }
}
export default Home;
