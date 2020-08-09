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
        text={
          <>
            책을 받은 순간이든, 읽던 도중이든, 다 읽고 난 후든 상관없이 마음에
            들지 않는다면 반납할 수 있습니다. 앱에서 반납하기 탭을 통해 주변
            반납이 가능한 곳을 확인하고 아무런 비용 없이 반납하세요!
            <br />
          </>
        }
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
        text={
          <>
            책이 마음에 든다면, 조금의 추가결제 후 반납할 필요 없이 책을
            소유하세요! 가격은 책마다 다르게 책정되지만, 언제나 해당 책의
            중고가보다 저렴합니다.
          </>
        }
      >
        보물을 건진 기분이에요!
        <br />
        평생 소유하고 싶어요
      </AfterReadCase>
    </AfterReadWrapper>
  );
};

export default AfterRead;
