import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const InlineText = styled.span`
  color: ${({ theme }) => theme.colors.pureBlack};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  @media (max-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SmallText = ({ children }: IProps) => {
  return (
    <InlineText>
      <TextWrapper>{children}</TextWrapper>
    </InlineText>
  );
};

export default SmallText;
