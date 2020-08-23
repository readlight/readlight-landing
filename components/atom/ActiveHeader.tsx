import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  isActive: boolean;
}

const DoubleLineHeaderStyle = styled.h1`
  color: ${({ theme }) => theme.colors.header};
  opacity: ${(props: IProps) => (props.isActive ? '1' : '0.3')};
  transition: color 230ms ease-out, opacity 230ms ease-out;
  user-select: none;

  @media (max-width: 768px) {
  }
`;

const ActiveHeader = ({ children, isActive }: IProps) => {
  return (
    <DoubleLineHeaderStyle isActive={isActive}>
      {children}
    </DoubleLineHeaderStyle>
  );
};

export default ActiveHeader;
