import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'react-scroll-trigger';

type Props = { children: React.ReactNode; isActive: boolean };

const SubSingleHeaderStyle = styled.h2`
  color: ${({ theme }) => theme.colors.subHeader};
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};
  transition: opcaity 230ms ease-out;
  user-select: none;

  @media (max-width: 768px) {
  }
`;

const ActiveSubHeader: React.FC<Props> = ({ children, isActive }) => {
  return (
    <SubSingleHeaderStyle isActive={isActive}>{children}</SubSingleHeaderStyle>
  );
};

export default ActiveSubHeader;
