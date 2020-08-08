import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'react-scroll-trigger';

type Props = { children: React.ReactNode; isActive: boolean };

type DoubleLineHeaderStyle = {
  isActive: boolean;
};

const DoubleLineHeaderStyle = styled.h1`
  color: ${({ theme }) => theme.colors.header};
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};

  @media (max-width: 768px) {
  }
`;

const ActiveHeader: React.FC<Props> = ({ children, isActive }) => {
  return (
    <DoubleLineHeaderStyle isActive={isActive}>
      {children}
    </DoubleLineHeaderStyle>
  );
};

export default ActiveHeader;
