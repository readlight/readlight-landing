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

const textData = {
  'bookoftoday' : '하루 한권, 인공지능이 당신의 독서 취향을 분석해 책을 추천해줍니다.',
  'collection' : '리드라이트 큐레이터들이 최근의 이슈나 트렌드에 맞는 책들을 엄선해 제공합니다.',
  'readerspick' : '독서 결정에 도움을 줄수 있도록 큐레이터가 책을 읽고 작성한 칼럼을 제공합니다.',
};

const DailyFeed = ({ isMobile }: IProps) => {
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
        imagePath={`/mobile-${feature}.png`}
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
          featureBooleanList={featureBooleanList}
          changeFeature={changeFeature}
        />
        <ChangeableText textData={textData[feature]} />
      </ContentArea>
    </DaliyFeedWrapper>
  );
};

export default DailyFeed;
