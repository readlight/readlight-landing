import * as React from 'react';
import styled from 'styled-components';

type Props = { children: React.ReactNode; isActive: boolean };

const InlineText = styled.span`
  color: ${(props) => (props.isActive ? 'black' : '#C6C6C6')};
  transition: color 230ms ease-in-out;

  @media (max-width: 768px) {
  }
`;
const ActiveSmallText: React.FC<Props> = ({ children, isActive }) => {
  return <InlineText isActive={isActive}>{children}</InlineText>;
};

export default ActiveSmallText;
