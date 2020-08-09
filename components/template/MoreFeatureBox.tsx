import MoreFeature from '../organism/MoreFeature';
import styled from 'styled-components';
import SingleLineHeader from '../atom/SingleLineHeader';
import SubSingleHeader from '../atom/SubSingleHeader';

type Props = {};

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 80px;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const MoreFeatureBox: React.FC<Props> = () => {
  return (
    <div>
      <div>
        <SingleLineHeader headerText={'편의기능으로 완전 무장'} />
        <SubSingleHeader
          subText={'독서에만 집중할수 있도록'}
          textAlign={'center'}
        />
      </div>
      <FeatureList>
        <MoreFeature iconPath={'/more1.svg'} headerText={'대여기간 연장'}>
          책을 다 읽지 못하였더라도,
          <br />
          추가결제로 1주일 연장할 수 있어요
        </MoreFeature>
        <MoreFeature iconPath={'/more3.svg'} headerText={'티켓 끊기'}>
          만약 원하는 책이 재고가 없다면
          <br />
          빠르게 구해서 1순위로 드려요
        </MoreFeature>
        <MoreFeature iconPath={'/more5.svg'} headerText={'찜하기'}>
          마음에 든 책이나 작가를 찜하면,
          <br />
          관련 도서가 나올때 바로 알려드려요
        </MoreFeature>
        <MoreFeature iconPath={'/more2.svg'} headerText={'새 책 바로구매'}>
          너무너무 기다리던 책은
          <br />
          완전히 새 책으로 구매할 수 있어요
        </MoreFeature>
        <MoreFeature iconPath={'/more4.svg'} headerText={'간편한 결제'}>
          카드 내려놓아도 좋아요. 토스와
          <br />
          카카오페이를 통한 결제를 지원합니다
        </MoreFeature>
        <MoreFeature iconPath={'/more6.svg'} headerText={'태그로 검색'}>
          십진분류표에서 헤멜 필요 없이,
          <br />
          SNS를 하듯 태그로 검색해보세요
        </MoreFeature>
      </FeatureList>
    </div>
  );
};

export default MoreFeatureBox;
