import ContentHeader from '../molecule/ContentHeader';
import FeatureChange from '../molecule/FeatureChange';
import styled from 'styled-components';

type Props = {};

const ContentArea = styled.div`
  margin-top: 200px;
`;

const DaliyFeedContent: React.FC<Props> = () => {
  return (
    <ContentArea>
      <ContentHeader
        firstLine={'한권을 읽더라도'}
        secondLine={'좋은책을 읽도록'}
        subText={'데일리 피드'}
      />
      <FeatureChange />
    </ContentArea>
  );
};

export default DaliyFeedContent;
