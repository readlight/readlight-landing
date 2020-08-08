import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const FlexContentBoxStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FlexContentBox = ({ children }: Props) => (
  <FlexContentBoxStyle>{children}</FlexContentBoxStyle>
);

export default FlexContentBox;
