import Layout from '../components/template/Layout';
import WidthAdjust from '../components/template/WidthAdjust';
import ContentBox from '../components/template/ContentBox';
import MoreFeature from '../components/organism/MoreFeature';
import MoreFeatureBox from '../components/template/MoreFeatureBox';
import FlexContentBox from '../components/template/FlexContentBox';
import ContentHeader from '../components/molecule/ContentHeader';
import FeatureChange from '../components/molecule/FeatureChange';
import MockupDeviceWrapper from '../components/organism/MockupDeviceWrapper';

export default function Home() {
  return (
    <div className="container">
      <Layout
        isBackgroundGray={false}
        desktopHeight={'100vh'}
        mobileHeight={'100vh'}
      >
        <WidthAdjust>
          <FlexContentBox>
            <div style={{ marginTop: '300px' }}>
              <ContentHeader
                firstLine={'한권을 읽더라도'}
                secondLine={'좋은책을 읽도록'}
                subText={'데일리 피드'}
              />
              <FeatureChange />
            </div>
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
