import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import MoreFeature from '../components/organism/MoreFeature';
import MoreFeatureBox from '../components/template/MoreFeatureBox';
import FlexContentBox from '../components/template/FlexContentBox';
import ContentHeader from '../components/molecule/ContentHeader';
import FeatureChange from '../components/molecule/FeatureChange';
import MockupDeviceWrapper from '../components/organism/MockupDeviceWrapper';
import DaliyFeedContent from '../components/organism/DaliyFeedContent';

export default function Test() {
  return (
    <div className="container">
      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <FlexContentBox>
            <DaliyFeedContent />
            <MockupDeviceWrapper />
          </FlexContentBox>
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
