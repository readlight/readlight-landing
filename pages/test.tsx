import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import MoreFeatureBox from '../components/template/MoreFeatureBox';
import FlexContentBox from '../components/template/FlexContentBox';
import MockupDeviceWrapper from '../components/organism/MockupWrapper';
import DailyFeedContent from '../components/organism/DailyFeedContent';
import ActiveHeaderBox from '../components/molecule/ActiveHeaderBox';
import ActiveHeader from '../components/atom/ActiveHeader';

export default function Test() {
  return (
    <div className="container">
      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <ActiveHeaderBox subText={'케이스1: 반납하기'}>
            음... 잘 읽었는데
            <br />
            다시 읽을것 같진 않아요
          </ActiveHeaderBox>
        </WidthAdjust>
      </Layout>
      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
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
