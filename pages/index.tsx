import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import NavbarWrapper from '../components/template/NavbarWrapper';
import ImageWrapper from '../components/template/ImageWrapper';
import MoreFeatureBox from '../components/template/MoreFeatureBox';
import DailyFeed from '../components/template/DailyFeed';
import Delivery from '../components/template/Delivery';
import AfterRead from '../components/template/AfterRead';
import MobileDetect from 'mobile-detect';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';
import MainBannerContent from '../components/molecule/MainBannerContent';

interface IProps {
  isMobile: boolean;
}

const Index: NextPage<IProps> = ({ isMobile }) => {
  useEffect(() => {
    console.log(isMobile);
  }, []);

  return (
    <div className="container">
      <ImageWrapper desktopHeight={'100vh'} mobileHeight={'98vh'}>
        <NavbarWrapper isMobile={isMobile} />
        <MainBannerContent
          isMobile={isMobile}
          firstLine={'택배로 빌리는 무제한 종이책'}
          secondLine={'리드라이트'}
        />
      </ImageWrapper>

      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'95vh'}
      >
        <WidthAdjust>
          <ContentBox>
            <DailyFeed isMobile={isMobile} />
          </ContentBox>
        </WidthAdjust>
      </Layout>

      <Layout
        isBackgroundGray={true}
        desktopHeight={'100vh'}
        mobileHeight={'95vh'}
      >
        <WidthAdjust>
          <ContentBox>
            <Delivery isMobile={isMobile} />
          </ContentBox>
        </WidthAdjust>
      </Layout>

      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'1100px'}
      >
        <WidthAdjust>
          <ContentBox>
            <AfterRead isMobile={isMobile} />
          </ContentBox>
        </WidthAdjust>
      </Layout>

      <Layout
        isBackgroundGray={true}
        desktopHeight={'100vh'}
        mobileHeight={'900px'}
      >
        <WidthAdjust>
          <ContentBox>
            <MoreFeatureBox />
          </ContentBox>
        </WidthAdjust>
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
