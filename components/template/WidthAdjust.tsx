import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const WidthAdjustStyle = styled.div`
  max-width: 1024px;
  width: 95%;
  margin: 0;
  padding: 0 24px;
  position: relative;
  height: 100%;

  @media (max-width: 768px) {
    width: 97%;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const WidthAdjust = ({ children }: Props) => (
  <WidthAdjustStyle>{children}</WidthAdjustStyle>
);

export default WidthAdjust;
