import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import MoreFeatureBox from '../components/template/MoreFeatureBox';
import FlexContentBox from '../components/template/FlexContentBox';
import MockupDeviceWrapper from '../components/organism/MockupWrapper';
import DailyFeedContent from '../components/organism/DailyFeedContent';

export default function Test() {
  return (
    <div className="container">
      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <DailyFeedContent />
        </WidthAdjust>
      </Layout>
      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <ContentBox marginTop={'-200px;'}>
            <MoreFeatureBox />
          </ContentBox>
        </WidthAdjust>
      </Layout>
    </div>
  );
}
