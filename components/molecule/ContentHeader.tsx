import SubSingleHeader from '../atom/SubSingleHeader';
import DoubleLineHeader from '../atom/DoubleLineHeader';

type Props = { firstLine: string; secondLine: string; subText: string };

const ContentHeader: React.FC<Props> = ({ firstLine, secondLine, subText }) => {
  return (
    <div>
      <SubSingleHeader subText={subText} />
      <DoubleLineHeader firstLine={firstLine} secondLine={secondLine} />
    </div>
  );
};

export default ContentHeader;
