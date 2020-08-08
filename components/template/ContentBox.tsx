import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  marginTop: String;
};

const ContentBoxStyle = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -100px;
  margin-top: ${(props) => props.marginTop};
`;

const ContentBox = ({ children, marginTop }: Props) => (
  <ContentBoxStyle marginTop={marginTop}>{children}</ContentBoxStyle>
);

export default ContentBox;
