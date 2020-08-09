import { NextPage, NextPageContext } from 'next';
import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import NavbarWrapper from '../components/template/NavbarWrapper';
import Navbar from '../components/organism/Navbar';
import DailyFeed from '../components/template/DailyFeed';
import MobileDetect from 'mobile-detect';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';
import FAQ from '../components/template/FAQ';

interface IProps {
  isMobile: boolean;
}

const Index: NextPage<IProps> = ({ isMobile }) => {
  useEffect(() => {
    console.log(isMobile);
  }, []);

  return (
    <div className="container">
      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <NavbarWrapper>
          <Navbar isMobile={isMobile} />
        </NavbarWrapper>
        <FAQ />
      </Layout>
    </div>
  );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
  let mobile;

  if (ctx.req) {
    const md = new MobileDetect(ctx.req.headers['user-agent']);
    mobile = !!md.mobile();
  } else {
    mobile = isMobile;
  }

  return { isMobile: mobile };
};

export default Index;
