import * as React from 'react';
import ContentHeader from '../molecule/ContentHeader';
import styled from 'styled-components';
import MockupDeviceWrapper from '../organism/MockupWrapper';
import SmallText from '../atom/SmallText';

interface IProps {
  isMobile: boolean;
}

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

const MobileWrapper = styled.div`
  margin-top: 20px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Delivery = ({ isMobile }: IProps) => {
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
            <div style={{ marginTop: '60px' }}>
              <SmallText>
                리드라이트의 모든 책은 앱 내에서 대여 후 택배를 통해 받을 수
                있습니다.
                <br />
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
        <MobileWrapper>
          <SmallText>
            리드라이트의 모든 책은 앱 내에서 대여 후 택배를 통해 받아볼 수
            있습니다.
            <br />
          </SmallText>
        </MobileWrapper>
      )}
    </DeliveryWrapper>
  );
};

export default Delivery;
