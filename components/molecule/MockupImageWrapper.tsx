import * as React from 'react';
import styled from 'styled-components';
import MockupImage from '../atom/MockupImage';

type Props = { imagePath: string };

const ScrennBox = styled.div`
  position: absolute;
  width: 273px;
  height: 594px;
  left: 121px;
  top: 82px;
  box-sizing: border-box;
`;

const MockupDeviceWrapper = ({ imagePath }: Props) => (
  <ScrennBox>
    <MockupImage path={imagePath} />
  </ScrennBox>
);

export default MockupDeviceWrapper;
