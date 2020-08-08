import * as React from 'react';
import styled from 'styled-components';

type Props = { children: React.ReactNode };

const InlineText = styled.span`
  color: ${({ theme }) => theme.colors.pureBlack};

  @media (max-width: 768px) {
  }
`;
const SmallText: React.FC<Props> = ({ children }) => {
  return <InlineText>{children}</InlineText>;
};

export default SmallText;
