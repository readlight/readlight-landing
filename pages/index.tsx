import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import NavbarWrapper from '../components/template/NavbarWrapper';
import Navbar from '../components/organism/Navbar';
import ImageWrapper from '../components/template/ImageWrapper';
import MoreFeatureBox from '../components/template/MoreFeatureBox';
import DailyFeed from '../components/template/DailyFeed';
import Delivery from '../components/template/Delivery';
import AfterRead from '../components/template/AfterRead';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>리드라이트 | 택배로 빌리는 무제한 종이책</title>
        <meta
          name="description"
          content="월 9,900원 구독으로 원하는 종이책을 마음껏 빌려봐요"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageWrapper desktopHeight={'100vh'} mobileHeight={'100vh'}>
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
      </ImageWrapper>

      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <ContentBox>
            <DailyFeed />
          </ContentBox>
        </WidthAdjust>
      </Layout>

      <Layout
        isBackgroundGray={true}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <ContentBox>
            <Delivery />
          </ContentBox>
        </WidthAdjust>
      </Layout>

      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'120vh'}
      >
        <WidthAdjust>
          <ContentBox>
            <AfterRead />
          </ContentBox>
        </WidthAdjust>
      </Layout>

      <Layout
        isBackgroundGray={true}
        desktopHeight={'100vh'}
        mobileHeight={'120vh'}
      >
        <WidthAdjust>
          <ContentBox>
            <MoreFeatureBox />
          </ContentBox>
        </WidthAdjust>
      </Layout>
    </div>
  );
}
