import ActiveHeader from '../atom/ActiveHeader';
import ActiveSubHeader from '../atom/ActiveSubHeader';

type Props = { children: React.ReactNode; subText: string; isActive: boolean };

const ActiveHeaderBox: React.FC<Props> = ({ children, subText, isActive }) => {
  return (
    <div>
      <ActiveSubHeader isActive={isActive}>{subText}</ActiveSubHeader>
      <ActiveHeader isActive={isActive}>{children}</ActiveHeader>
    </div>
  );
};

export default ActiveHeaderBox;
