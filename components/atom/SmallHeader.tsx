import * as React from 'react';
import styled from 'styled-components';

type Props = { text: String };

const InlineHeader = styled.h3`
  color: ${({ theme }) => theme.colors.pureBlack};

  @media (max-width: 768px) {
  }
`;
const SmallHeader: React.FC<Props> = ({ text }) => {
  return <InlineHeader>{text}</InlineHeader>;
};

export default SmallHeader;
