import styled from 'styled-components';
import ActiveHeader from '../atom/ActiveHeader';
import WidthAdjust from '../template/WidthAdjust';
import FAQItem from '../organism/FAQItem';
import useFaq from '../../utils/useFaq';
import { url } from 'inspector';

const faqData = [
  {
    title: '첫번째 질문입니다',
    category: 1,
    answer: '가나다라마바사',
    index: 1,
  },
  {
    title: '두번째 질문입니다',
    category: 2,
    answer: '아자차카타파하',
    index: 2,
  },
  {
    title: '장종우는 왜 머리가 자라지 않을까요',
    category: 3,
    answer: '세계 7대 난제입니다',
    index: 3,
  },
  {
    title: '성훈이의 국적은 어디일까요?',
    category: 4,
    answer: (
      <>
        12년전 CIA데이터베이스에서 의문의 사고로 인해 삭제당하였습니다
        <br /> 그는 사실 파키스탄에서 용병으로 활동하였습니다.
      </>
    ),
    index: 4,
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
