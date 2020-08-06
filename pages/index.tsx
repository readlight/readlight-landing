import Head from 'next/head';
import Link from 'next/link';
import SubSingleHeader from '../components/atom/SubSingleHeader';
import DoubleLineHeader from '../components/atom/DoubleLineHeader';
import { DocumentContext } from 'next/dist/next-server/lib/document-context';
import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import ContentHeader from '../components/molecule/ContentHeader';
import Navbar from '../components/organism/Navbar';

// color: ${({ theme }) => theme.colors.primary};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>리드라이트 | 택배로 빌리는 무제한 종이책</title>
        <meta name="description" content="디스크립션을 적는 곳입니다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="./../public/cover.jpg" />

      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <Navbar />
      </Layout>

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
            <SubSingleHeader subText={'반가워요'} />
            <DoubleLineHeader firstLine={'두번째'} secondLine={'테스트'} />
          </ContentBox>
        </WidthAdjust>
      </Layout>
    </div>
  );
}
