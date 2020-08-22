import styled from 'styled-components';

interface IProps {
  title: string;
  category: number;
  children: React.ReactNode;
  faqIndex: number;
  changeFaq: (faxIndex: number) => void;
  index: number;
}

interface IFAQWrapper {
  isSelected: boolean;
}

const FAQWrapper = styled.div`
  background-color: ${(props: IFAQWrapper) =>
    props.isSelected ? '#f7f8fa' : 'white'};
  transition: background-color 230ms ease-in-out;
  border-bottom: 1.5px solid #f7f8fa;

  &:hover {
    cursor: pointer;
    background-color: #f7f8fa;
  }
`;

const TextWrapper = styled.div`
  padding: 20px 20px;
`;

const QuestionText = styled.span`
  user-select: none;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const AnswerWrapper = styled.div`
  padding-top: 20px;
`;

const AnswerText = styled.span`
  padding-top: 20px;
  user-select: none;
  font-size: 18px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FAQItem = ({
  title,
  category,
  children,
  faqIndex,
  changeFaq,
  index,
}: IProps) => {
  return (
    <FAQWrapper
      onClick={() => {
        if (faqIndex == index) {
          changeFaq(0);
        } else {
          changeFaq(index);
        }
      }}
      isSelected={index == faqIndex}
    >
      <TextWrapper>
        <QuestionText>Q. {title}</QuestionText>
        {index == faqIndex && (
          <AnswerWrapper>
            <AnswerText>{children}</AnswerText>
          </AnswerWrapper>
        )}
      </TextWrapper>
    </FAQWrapper>
  );
};

export default FAQItem;
