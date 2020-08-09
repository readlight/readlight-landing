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
  }
`;

const FundingButton = styled.button`
  margin-top: 15px;
  background: inherit;
  padding: 10px 20px;
  outline: none;
  font-size: 20px;
  color: black;
  font-weight: bold;
  border-radius: 7px;
  border: 2px solid black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: calc(130% + 20px);
    background-color: ${({ theme }) => theme.colors.pointBlue};
    border: 0px solid;
    color: white;
    font-size: 19px;
    padding: 14px;
  }
`;

const MainBannerContent = () => {
  return (
    <MainBannerContentWrapper>
      <PaddingGiver>
        <QuickHeader isActive={true}>택배로 빌리는 무제한 종이책</QuickHeader>
        <QuickHeader isActive={true}>리드라이트</QuickHeader>
        <FundingButton>지금 펀딩하기</FundingButton>
      </PaddingGiver>
    </MainBannerContentWrapper>
  );
};

export default MainBannerContent;
