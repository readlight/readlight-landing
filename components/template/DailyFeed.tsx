import React from 'react';
import ContentHeader from '../molecule/ContentHeader';
import FeatureChange from '../molecule/FeatureChange';
import styled from 'styled-components';
import ChangeableText from '../atom/ChangeableText';
import useFeature from '../../utils/useFeature';
import MockupDeviceWrapper from '../organism/MockupWrapper';
import useWindowSize from '../../utils/useWindowSize';

type Props = {};

const DaliyFeedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentArea = styled.div`
  margin-top: 130px;
  margin-right: 150px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const DailyFeed: React.FC<Props> = () => {
  const { width = 0 } = useWindowSize();

  const imagePathList = [
    '/mobile-bookoftoday.png',
    '/mobile-collection.png',
    '/mobile-readerspick.png',
  ];
  const { feature, featureBooleanList, changeFeature } = useFeature();
  return (
    <DaliyFeedWrapper>
      {width < 784 ? (
        <div className="test">
          <ContentHeader
            firstLine={'한권을 읽더라도'}
            secondLine={'좋은책을 읽도록'}
            subText={'데일리 피드'}
          />
        </div>
      ) : (
        <></>
      )}
      <MockupDeviceWrapper
        imagePath={imagePathList[feature]}
        left={'-70px'}
        right={'none'}
      />
      <ContentArea>
        {width < 784 ? (
          <></>
        ) : (
          <ContentHeader
            firstLine={'한권을 읽더라도'}
            secondLine={'좋은책을 읽도록'}
            subText={'데일리 피드'}
          />
        )}
        <FeatureChange
          feature={feature}
          featureBooleanList={featureBooleanList}
          changeFeature={changeFeature}
        />
        <ChangeableText feature={feature} />
      </ContentArea>
    </DaliyFeedWrapper>
  );
};

export default DailyFeed;
