import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const ContentBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const ContentBox = ({ children }: IProps) => (
  <ContentBoxStyle>{children}</ContentBoxStyle>
);

export default ContentBox;
