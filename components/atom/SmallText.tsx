import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const InlineText = styled.span`
  color: ${({ theme }) => theme.colors.pureBlack};

  @media (max-width: 768px) {
  }
`;
const SmallText = ({ children }: IProps) => {
  return <InlineText>{children}</InlineText>;
};

export default SmallText;
