import ActiveHeader from '../atom/ActiveHeader';
import ActiveSubHeader from '../atom/ActiveSubHeader';
import { Children } from 'react';

type Props = { children: React.ReactNode; subText: string };

const ActiveHeaderBox: React.FC<Props> = ({ children, subText }) => {
  return (
    <div>
      <ActiveSubHeader isActive={false}>{subText}</ActiveSubHeader>
      <ActiveHeader isActive={false}>{children}</ActiveHeader>
    </div>
  );
};

export default ActiveHeaderBox;
