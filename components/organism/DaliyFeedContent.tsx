import React from 'react';
import ContentHeader from '../molecule/ContentHeader';
import FeatureChange from '../molecule/FeatureChange';
import styled from 'styled-components';
import SmallText from '../atom/SmallText';
import ChangeableText from '../atom/ChangeableText';
import useFeature from '../../utils/useFeature';
import MockupDeviceWrapper from '../organism/MockupDeviceWrapper';

type Props = {};

const DaliyFeedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContentArea = styled.div`
  margin-top: 200px;
`;

const DaliyFeedContent: React.FC<Props> = () => {
  const imagePathList = [
    '/mobile-bookoftoday.png',
    '/mobile-collection.png',
    '/mobile-readerspick.png',
  ];
  const { feature, featureBooleanList, changeFeature } = useFeature();
  return (
    <DaliyFeedWrapper>
      <ContentArea>
        <ContentHeader
          firstLine={'한권을 읽더라도'}
          secondLine={'좋은책을 읽도록'}
          subText={'데일리 피드'}
        />
        <FeatureChange
          feature={feature}
          featureBooleanList={featureBooleanList}
          changeFeature={changeFeature}
        />
        <ChangeableText feature={feature} />
      </ContentArea>
      <MockupDeviceWrapper imagePath={imagePathList[feature]} />
    </DaliyFeedWrapper>
  );
};

export default DaliyFeedContent;
