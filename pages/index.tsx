import Head from 'next/head';
import Link from 'next/link';
import DoubleLineHeader from '../components/atom/DoubleLineHeader';
import { DocumentContext } from 'next/dist/next-server/lib/document-context';
import Layout from '../components/template/Layout';

// color: ${({ theme }) => theme.colors.primary};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>리드라이트 | 택배로 빌리는 무제한 종이책</title>
        <meta name="description" content="디스크립션을 적는 곳입니다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout
        isBackgroundGray={false}
        desktopHeight={'101vh'}
        mobileHeight={'101vh'}
      >
        <span>hi</span>
      </Layout>
      <Layout
        isBackgroundGray={true}
        desktopHeight={'920px'}
        mobileHeight={'350px'}
      >
        <DoubleLineHeader
          firstLine={'한권을 읽더라도'}
          secondLine={'좋은책을 읽도록'}
        />
      </Layout>

      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <DoubleLineHeader firstLine={'두번째'} secondLine={'테스트'} />
      </Layout>
    </div>
  );
}
