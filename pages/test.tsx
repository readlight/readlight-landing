import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import MoreFeatureBox from '../components/template/MoreFeatureBox';
import FlexContentBox from '../components/template/FlexContentBox';
import MockupDeviceWrapper from '../components/organism/MockupWrapper';
import DailyFeedContent from '../components/organism/DailyFeedContent';
import ActiveHeaderBox from '../components/molecule/ActiveHeaderBox';
import ActiveHeader from '../components/atom/ActiveHeader';
import AfterReadContent from '../components/molecule/AfterReadContent';
import AfterReadCase from '../components/organism/AfterReadCase';
import AfterRead from '../components/template/AfterRead';

export default function Test() {
  return (
    <div className="container">
      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <ContentBox>
            <AfterRead />
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
            <MoreFeatureBox />
          </ContentBox>
        </WidthAdjust>
      </Layout>
    </div>
  );
}
