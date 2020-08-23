import SmallHeader from '../atom/SmallHeader';
import SmallText from '../atom/SmallText';
import styled from 'styled-components';

interface IProps {
  headerText: string;
  children: React.ReactNode;
}

const ContentWrapper = styled.div`
  margin: 12px 0 0 15px;

  @media (max-width: 768px) {
    margin: 9px 0 0 20px;
  }
`;

const SmallTextWrapper = styled.div`
  margin-top: 5px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const MoreFeatureContent = ({ headerText, children }: IProps) => {
  return (
    <ContentWrapper>
      <SmallHeader text={headerText} />
      <SmallTextWrapper>
        <SmallText>{children}</SmallText>
      </SmallTextWrapper>
    </ContentWrapper>
  );
};

export default MoreFeatureContent;
