import styled from 'styled-components';
import ActiveHeader from '../atom/ActiveHeader';
import ActiveSmallText from '../atom/ActiveSmallText';
import LargeActionButton from '../atom/LargeActionButton';

const MainBannerContentWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 250px;
  width: 100%;

  @media (max-width: 768px) {
    top: 150px;
  }
`;

const PaddingGiver = styled.div`
  max-width: 1030px;
  padding: 0 40px;
  margin-left: auto;
  margin-right: auto;
`;

// 수정 필요
const QuickHeader = styled.h1`
  color: black;
  transition: color 230ms ease-out, opacity 230ms ease-out;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 25px;
    text-align: center;
    color: white;
    text-shadow: 0px 2px 25px gray;
  }
`;

const FundingButton = styled.button`
  margin-top: 15px;
  background: inherit;
  padding: 12px 25px;
  outline: none;
  font-size: 20px;
  color: black;
  font-weight: bold;
  border-radius: 7px;
  border: 3px solid black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: 30px;
    background: ${({ theme }) => theme.colors.pointBlue};
    border: none;
    color: white;
    font-size: 18px;
    left: 30px;
    right: 30px;
    width: calc(100% - 60px);
    height: 50px;
  }
`;

const MainBannerContent = ({ isMobile }) => {
  return (
    <>
      <MainBannerContentWrapper>
        <PaddingGiver>
          <QuickHeader isActive={true}>택배로 빌리는 무제한 종이책</QuickHeader>
          <QuickHeader isActive={true}>리드라이트</QuickHeader>
          {!isMobile && <FundingButton>지금 펀딩하기</FundingButton>}
        </PaddingGiver>
      </MainBannerContentWrapper>
      {isMobile && <FundingButton>지금 펀딩하기</FundingButton>}
    </>
  );
};

export default MainBannerContent;
