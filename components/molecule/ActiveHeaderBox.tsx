import * as React from 'react';
import ActiveHeader from '../atom/ActiveHeader';
import ActiveSubHeader from '../atom/ActiveSubHeader';

interface IProps {
  children: React.ReactNode;
  subText: string;
  isActive: boolean;
}

const ActiveHeaderBox = ({ children, subText, isActive }: IProps) => {
  return (
    <div>
      <ActiveSubHeader isActive={isActive}>{subText}</ActiveSubHeader>
      <ActiveHeader isActive={isActive}>{children}</ActiveHeader>
    </div>
  );
};

export default ActiveHeaderBox;
