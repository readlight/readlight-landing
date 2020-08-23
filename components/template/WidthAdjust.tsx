import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const WidthAdjustStyle = styled.div`
  max-width: 1024px;
  width: 95%;
  margin: 0 auto;
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

const WidthAdjust = ({ children }: IProps) => (
  <WidthAdjustStyle>{children}</WidthAdjustStyle>
);

export default WidthAdjust;
