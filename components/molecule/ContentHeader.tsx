import * as React from 'react';
import SubSingleHeader from '../atom/SubSingleHeader';
import DoubleLineHeader from '../atom/DoubleLineHeader';
import styled from 'styled-components';

interface IProps {
  firstLine: string;
  secondLine: string;
  subText: string;
}

const HeaderWrapper = styled.div``;

const ContentHeader = ({ firstLine, secondLine, subText }: IProps) => {
  return (
    <HeaderWrapper>
      <SubSingleHeader textAlign={'left'} subText={subText} />
      <DoubleLineHeader firstLine={firstLine} secondLine={secondLine} />
    </HeaderWrapper>
  );
};

export default ContentHeader;
