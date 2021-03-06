import * as React from 'react';
import styled from 'styled-components';
import MockupImage from '../atom/MockupImage';

interface IProps {
  imagePath: string;
}

const ScrennBox = styled.div`
  position: absolute;
  width: 273px;
  height: 594px;
  left: 122px;
  top: 82px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 220px;
    left: -9999px;
    right: -9999px;
    margin: 0 auto;
  }
`;

const MockupImageWrapper = ({ imagePath }: IProps) => (
  <ScrennBox>
    <MockupImage path={imagePath} />
  </ScrennBox>
);

export default MockupImageWrapper;
