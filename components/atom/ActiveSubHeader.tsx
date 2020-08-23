import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  isActive: boolean;
}

const SubSingleHeaderStyle = styled.h2`
  color: ${({ theme }) => theme.colors.subHeader};
  opacity: ${(props: IProps) => (props.isActive ? '1' : '0.3')};
  transition: opcaity 230ms ease-out;
  user-select: none;

  @media (max-width: 768px) {
  }
`;

const ActiveSubHeader = ({ children, isActive }: IProps) => {
  return (
    <SubSingleHeaderStyle isActive={isActive}>{children}</SubSingleHeaderStyle>
  );
};

export default ActiveSubHeader;
