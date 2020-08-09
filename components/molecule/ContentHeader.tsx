import SubSingleHeader from '../atom/SubSingleHeader';
import DoubleLineHeader from '../atom/DoubleLineHeader';
import styled from 'styled-components';

type Props = { firstLine: string; secondLine: string; subText: string };

const HeaderWrapper = styled.div``;

const ContentHeader: React.FC<Props> = ({ firstLine, secondLine, subText }) => {
  return (
    <HeaderWrapper>
      <SubSingleHeader textAlign={'left'} subText={subText} />
      <DoubleLineHeader firstLine={firstLine} secondLine={secondLine} />
    </HeaderWrapper>
  );
};

export default ContentHeader;
