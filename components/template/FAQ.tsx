import styled from 'styled-components';
import ActiveHeader from '../atom/ActiveHeader';
import WidthAdjust from '../template/WidthAdjust';
import FAQItem from '../organism/FAQItem';
import useFaq from '../../utils/useFaq';
import { url } from 'inspector';

const faqData = [
  {
    title: '결제는 어떻게 할 수 있나요?',
    category: 1,
    answer: '가나다라마바사',
    index: 1,
  },
  {
    title: '결제(구독)를 중지하고 싶습니다.',
    category: 1,
    answer: '가나다라마바사',
    index: 2,
  },
  {
    title: '리드라이트에서 빌려주는 책은 어떤 책인가요?',
    category: 2,
    answer: '아자차카타파하',
    index: 3,
  },
  {
    title: '도서 반납은 어디서 할 수 있나요?',
    category: 3,
    answer: '세계 7대 난제입니다',
    index: 4,
  },
  {
    title: '대여기간(2주)가 지났는데도 책을 반납하지 않으면 어떻게 되나요?',
    category: 4,
    answer: (
      <>
        12년전 CIA데이터베이스에서 의문의 사고로 인해 삭제당하였습니다
        <br /> 그는 사실 파키스탄에서 용병으로 활동하였습니다.
      </>
    ),
    index: 5,
  },
  {
    title: '책을 받았는데 훼손되어 있어요.',
    category: 4,
    answer: (
      <>
        12년전 CIA데이터베이스에서 의문의 사고로 인해 삭제당하였습니다
        <br /> 그는 사실 파키스탄에서 용병으로 활동하였습니다.
      </>
    ),
    index: 6,
  },
  {
    title: '책을 읽던 중 실수로 훼손하였습니다. 어떻게 해야 할까요?',
    category: 4,
    answer: (
      <>
        12년전 CIA데이터베이스에서 의문의 사고로 인해 삭제당하였습니다
        <br /> 그는 사실 파키스탄에서 용병으로 활동하였습니다.
      </>
    ),
    index: 7,
  },
  {
    title: '책을 구매할 때의 가격은 어떻게 책정되나요?',
    category: 4,
    answer: (
      <>
        12년전 CIA데이터베이스에서 의문의 사고로 인해 삭제당하였습니다
        <br /> 그는 사실 파키스탄에서 용병으로 활동하였습니다.
      </>
    ),
    index: 8,
  },
  {
    title: '대여기간(2주)을 연장하고 싶습니다.',
    category: 4,
    answer: (
      <>
        12년전 CIA데이터베이스에서 의문의 사고로 인해 삭제당하였습니다
        <br /> 그는 사실 파키스탄에서 용병으로 활동하였습니다.
      </>
    ),
    index: 9,
  },
  {
    title: '티켓 끊기가 정확히 뭔가요?',
    category: 4,
    answer: (
      <>
        12년전 CIA데이터베이스에서 의문의 사고로 인해 삭제당하였습니다
        <br /> 그는 사실 파키스탄에서 용병으로 활동하였습니다.
      </>
    ),
    index: 10,
  },
];

const FaqWrapper = styled.div`
  padding-top: 250px;
  padding-bottom: 10px;
  padding-left: 0px;

  margin-left: 20px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const ImageWrapper = styled.div`
  background-image: url('/faqimage.jpg');
  background-position: center center;
  background-size: cover;
`;

const HeaderStyle = styled.h1`
  color: white;
  user-select: none;

  @media (max-width: 768px) {
  }
`;

const FAQ = () => {
  const { faqIndex, changeFaq } = useFaq();
  return (
    <>
      <ImageWrapper>
        <WidthAdjust>
          <FaqWrapper>
            <HeaderStyle>자주 묻는 질문</HeaderStyle>
          </FaqWrapper>
        </WidthAdjust>
      </ImageWrapper>
      <div>
        <WidthAdjust>
          <div style={{ marginTop: '20px' }}>
            {faqData.map(({ title, category, answer, index }, idx) => {
              return (
                <FAQItem
                  key={idx}
                  title={title}
                  category={category}
                  faqIndex={faqIndex}
                  changeFaq={changeFaq}
                  index={index}
                >
                  {answer}
                </FAQItem>
              );
            })}
          </div>
        </WidthAdjust>
      </div>
    </>
  );
};

export default FAQ;
