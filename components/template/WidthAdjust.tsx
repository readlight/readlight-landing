import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const WidthAdjustStyle = styled.div`
  max-width: 1024px;
  width: 95%;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  height: 100%;
`;

const WidthAdjust = ({ children }: Props) => (
  <WidthAdjustStyle>{children}</WidthAdjustStyle>
);

export default WidthAdjust;
