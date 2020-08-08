import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import ContentHeader from '../components/molecule/ContentHeader';
import NavbarWrapper from '../components/template/NavbarWrapper';
import Navbar from '../components/organism/Navbar';
import FeatureChange from '../components/molecule/FeatureChange';
import ImageWrapper from '../components/template/ImageWrapper';
import MockupWrapper from '../components/template/MockupWrapper';
import MoreFeature from '../components/organism/MoreFeature';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>리드라이트 | 택배로 빌리는 무제한 종이책</title>
        <meta name="description" content="디스크립션을 적는 곳입니다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageWrapper desktopHeight={'100vh'} mobileHeight={'100vh'}>
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
      </ImageWrapper>

      <Layout
        isBackgroundGray={true}
        desktopHeight={'920px'}
        mobileHeight={'350px'}
      >
        <WidthAdjust>
          <ContentBox>
            <ContentHeader
              firstLine={'한권을 읽더라도'}
              secondLine={'좋은책을 읽도록'}
              subText={'데일리 피드'}
            />
            <MockupWrapper></MockupWrapper>
          </ContentBox>
        </WidthAdjust>
      </Layout>

      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <ContentBox>
            <ContentHeader
              firstLine={'침대에 누워서'}
              secondLine={'손가락으로 주문'}
              subText={'택배로 배송'}
            />
            <FeatureChange />
          </ContentBox>
        </WidthAdjust>
      </Layout>

      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <ContentBox>
            <MoreFeature iconPath={'/more1.svg'} headerText={'대여기간 연장'}>
              책을 다 못읽었다면
              <br />
              추가결제로 연장할수 있어요
            </MoreFeature>
          </ContentBox>
        </WidthAdjust>
      </Layout>
    </div>
  );
}
