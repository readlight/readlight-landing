import * as React from 'react';
import ContentHeader from '../molecule/ContentHeader';
import FeatureChange from '../molecule/FeatureChange';
import styled from 'styled-components';
import ChangeableText from '../atom/ChangeableText';
import useFeature from '../../utils/useFeature';
import MockupDeviceWrapper from '../organism/MockupWrapper';

interface IProps {
  isMobile: boolean;
}

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
  margin-right: 170px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const DailyFeed = ({ isMobile }: IProps) => {
  const imagePathList = [
    '/mobile-bookoftoday.png',
    '/mobile-collection.png',
    '/mobile-readerspick.png',
  ];
  const { feature, featureBooleanList, changeFeature } = useFeature();

  return (
    <DaliyFeedWrapper>
      {isMobile && (
        <div className="test">
          <ContentHeader
            firstLine={'매일마다 바뀌는'}
            secondLine={'나만의 도서추천'}
            subText={'데일리 피드'}
          />
        </div>
      )}
      <MockupDeviceWrapper
        imagePath={imagePathList[feature]}
        left={'-50px'}
        right={'none'}
      />
      <ContentArea>
        {!isMobile && (
          <ContentHeader
            firstLine={'매일마다 바뀌는'}
            secondLine={'나만의 도서추천'}
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
