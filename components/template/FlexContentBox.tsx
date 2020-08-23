import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
};

const FlexContentBoxStyle = styled.div`
  width: 100%;
`;

const FlexContentBox = ({ children }: IProps) => (
  <FlexContentBoxStyle>{children}</FlexContentBoxStyle>
);

export default FlexContentBox;
