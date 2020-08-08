import styled from 'styled-components';

import AfterReadCase from '../organism/AfterReadCase';

const AfterReadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AfterRead = () => {
  return (
    <AfterReadWrapper>
      <AfterReadCase
        subText={'케이스1: 반납하기'}
        targetPath="/"
        imagePath="/mobile-map.png"
      >
        음... 잘 읽었는데
        <br />
        다시 읽을것 같진 않아요
      </AfterReadCase>
      <AfterReadCase
        subText={'케이스2: 구매하기'}
        targetPath="/"
        imagePath="/mobile-purchase.png"
      >
        보물을 건진 기분이에요!
        <br />
        평생 소유하고 싶어요
      </AfterReadCase>
    </AfterReadWrapper>
  );
};

export default AfterRead;
