import styled from 'styled-components';

import AfterReadCase from '../organism/AfterReadCase';

type Props = { isMobile: boolean };

const AfterReadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
`;

const AfterRead = ({ isMobile }: Props) => {
  return (
    <AfterReadWrapper>
      <AfterReadCase
        subText={'케이스1: 반납하기'}
        targetPath="/"
        imagePath="/mobile-map.png"
        isMobile={isMobile}
      >
        음... 잘 읽었는데
        <br />
        다시 읽을것 같진 않아요
      </AfterReadCase>
      <AfterReadCase
        subText={'케이스2: 구매하기'}
        targetPath="/"
        imagePath="/mobile-purchase.png"
        isMobile={isMobile}
      >
        보물을 건진 기분이에요!
        <br />
        평생 소유하고 싶어요
      </AfterReadCase>
    </AfterReadWrapper>
  );
};

export default AfterRead;
