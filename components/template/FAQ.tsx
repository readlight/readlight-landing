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
    answer: (
      <>
        서비스 이용료 9,900원은 매달 결제되는 구독방식의 결제로, 결제일로부터
        한달이 지날 때마다 자동으로 지불됩니다. <br />
        결제 방법으로 카카오페이, 토스 또는 신용카드를 등록하여 결제할 수
        있습니다.
      </>
    ),
    index: 1,
  },
  {
    title: '결제(구독)를 중지하고 싶습니다.',
    category: 1,
    answer: (
      <>
        "마이페이지 -&gt; 구독 중지" 탭을 통해 언제든지 구독을 중지할 수 있으며,
        결제는 최종 결제일로부터 한달이 지난 시점부터 자동으로 해지됩니다.
        <br />* 현재 빌리고 있거나 배송중인 책이 있다면 구독을 중지할 수 없으며,
        책을 반납한 후 다시 시도해보세요.
        <br />* 구독을 중지해도 새책 구매하기 등의 기능을 이용할 수 있습니다.
      </>
    ),
    index: 2,
  },
  {
    title: '리드라이트에서 빌려주는 책은 어떤 책인가요?',
    category: 2,
    answer: (
      <>
        리드라이트에서 구독을 통해 대여되는 책은 겉보기에 새책과 다름이 없는
        중고책들입니다. 자사 창고에 안전하게 보관되다 대여자에게 전송되기 전
        자체적인 검수를 통해 사용 가능 여부를 판단하고 배송합니다.
        <br />
        <br />* 새책 구매하기는 중고책이 아닌 새 책을 구매하는 기능입니다.
      </>
    ),
    index: 3,
  },
  {
    title: '도서 반납은 어디서 할 수 있나요?',
    category: 3,
    answer: (
      <>
        다 읽은 책은 주변 가맹 편의점 또는 자동 디스펜서를 통해 반납할 수
        있습니다. 앱을 이용해 내 주변에 반납 가능한 장소를 확인할 수 있습니다.
      </>
    ),
    index: 4,
  },
  {
    title: '대여기간(2주)가 지났는데도 책을 반납하지 않으면 어떻게 되나요?',
    category: 4,
    answer: (
      <>
        2주가 지난 날로부터 3일 안에 주변 반납 가능한 장소를 통해 반납하지
        않으면, 소정의 연체료가 부과될 수 있습니다.
      </>
    ),
    index: 5,
  },
  {
    title: '책을 받았는데 훼손되어 있어요.',
    category: 4,
    answer: (
      <>
        "마이페이지 -&gt; 훼손 신고하기" 탭을 통해 책을 받자마자 훼손 부분을
        사진으로 찍으면 고객팀이 확인 후 교환 또는 무료 제공 등과 같은 조치를
        해드립니다.
      </>
    ),
    index: 6,
  },
  {
    title: '책을 읽던 중 실수로 훼손하였습니다. 어떻게 해야 할까요?',
    category: 4,
    answer: (
      <>
        "마이페이지 -&gt; 훼손 신고하기" 탭을 통해 훼손 부분을 사진으로 찍고
        훼손한 사유를 적으면 고객팀이 확인 후 회수 또는 구매 할인쿠폰을 드려
        구매가 가능하도록 도와드립니다.
      </>
    ),
    index: 7,
  },
  {
    title: '책을 구매할 때의 가격은 어떻게 책정되나요?',
    category: 4,
    answer: (
      <>
        책의 원가와 상태 등에 따라 책정됩니다. 보통 시중에서 거래되는 중고가보다
        저렴하게 책정됩니다.
      </>
    ),
    index: 8,
  },
  {
    title: '대여기간을 연장하고 싶습니다.',
    category: 4,
    answer: (
      <>
        "내 서재 -&gt; 해당 책 클릭 -&gt; 대여연장" 탭을 통해 1,000원 추가결제
        후 1주일간 더 읽어볼 수 있습니다.
      </>
    ),
    index: 9,
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
