import React from 'react';
import ContentHeader from '../molecule/ContentHeader';
import styled from 'styled-components';
import MockupDeviceWrapper from '../organism/MockupWrapper';
import SmallText from '../atom/SmallText';

type Props = { isMobile: boolean };

const DeliveryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentArea = styled.div`
  margin-top: 150px;
  margin-left: 60px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Delivery: React.FC<Props> = ({ isMobile }) => {
  const imagePathList = ['/mobile-delivery.png'];
  return (
    <DeliveryWrapper>
      {isMobile && (
        <ContentHeader
          firstLine={'침대에 누워서'}
          secondLine={'손가락으로 주문'}
          subText={'택배로 배송'}
        />
      )}
      <ContentArea>
        {!isMobile && (
          <div className="hi">
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
          </div>
        )}
      </ContentArea>
      <MockupDeviceWrapper
        imagePath={imagePathList[0]}
        left={'none'}
        right={'-30px'}
      />
      {isMobile && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <SmallText>
            하하
            <br />
            가나다라
          </SmallText>
        </div>
      )}
    </DeliveryWrapper>
  );
};

export default Delivery;
