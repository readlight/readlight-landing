import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  text: string;
}

const InlineHeader = styled.h3`
  color: ${({ theme }) => theme.colors.pureBlack};

  @media (max-width: 768px) {
  }
`;
const SmallHeader = ({ text }: IProps) => {
  return <InlineHeader>{text}</InlineHeader>;
};

export default SmallHeader;
