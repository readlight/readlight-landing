import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const ContentBoxStyle = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -100px;
`;

const ContentBox = ({ children }: Props) => (
  <ContentBoxStyle>{children}</ContentBoxStyle>
);

export default ContentBox;
