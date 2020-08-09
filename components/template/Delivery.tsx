import React from 'react';
import ContentHeader from '../molecule/ContentHeader';
import FeatureChange from '../molecule/FeatureChange';
import styled from 'styled-components';
import ChangeableText from '../atom/ChangeableText';
import useFeature from '../../utils/useFeature';
import MockupDeviceWrapper from '../organism/MockupWrapper';
import SmallText from '../atom/SmallText';

type Props = {};

const DaliyFeedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ContentArea = styled.div`
  margin-top: 150px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Delivery: React.FC<Props> = () => {
  const imagePathList = ['/mobile-delivery.png'];
  return (
    <DaliyFeedWrapper>
      <ContentArea>
        <ContentHeader
          firstLine={'침대에 누워서'}
          secondLine={'손가락으로 주문'}
          subText={'택배로 배송'}
        />
        <div style={{ marginTop: '80px' }}>
          <SmallText>
            하하
            <br />
            가나다라
          </SmallText>
        </div>
      </ContentArea>
      <MockupDeviceWrapper
        imagePath={imagePathList[0]}
        left={'none'}
        right={'-30px'}
      />
    </DaliyFeedWrapper>
  );
};

export default Delivery;
