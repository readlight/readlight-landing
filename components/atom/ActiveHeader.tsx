import * as React from 'react';
import styled from 'styled-components';

type Props = { children: React.ReactNode; isActive: boolean };

type DoubleLineHeaderStyle = {
  isActive: boolean;
};

const DoubleLineHeaderStyle = styled.h1`
  color: ${({ theme }) => theme.colors.header};
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};
  transition: color 230ms ease-out, opacity 230ms ease-out;
  user-select: none;

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
