import * as React from 'react';
import styled from 'styled-components';
import MockupImage from '../atom/MockupImage';

type Props = {};

const ScrennBox = styled.div`
  position: absolute;
  width: 273px;
  height: 594px;
  left: 121px;
  top: 82px;
  box-sizing: border-box;
`;

const MockupDeviceWrapper = ({}: Props) => (
  <ScrennBox>
    <MockupImage path={'/testmock.png'} />
  </ScrennBox>
);

export default MockupDeviceWrapper;