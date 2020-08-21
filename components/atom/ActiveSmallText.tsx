import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  isActive: boolean;
}

const InlineText = styled.span`
  color: ${(props: IProps) => (props.isActive ? 'black' : '#C6C6C6')};
  transition: color 230ms ease-in-out;

  @media (max-width: 768px) {
  }
`;

const ActiveSmallText = ({ children, isActive }: IProps) => {
  return <InlineText isActive={isActive}>{children}</InlineText>;
};

export default ActiveSmallText;
