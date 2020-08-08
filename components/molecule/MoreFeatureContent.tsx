import SmallHeader from '../atom/SmallHeader';
import SmallText from '../atom/SmallText';
import styled from 'styled-components';

type Props = { headerText: string; children: React.ReactNode };

const ContentWrapper = styled.div`
  margin: 12px 0 0 15px;
`;

const MoreFeatureContent: React.FC<Props> = ({ headerText, children }) => {
  return (
    <ContentWrapper>
      <SmallHeader text={headerText} />
      <div style={{ marginTop: '5px' }}>
        <SmallText>{children}</SmallText>
      </div>
    </ContentWrapper>
  );
};

export default MoreFeatureContent;
