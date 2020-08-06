import * as React from 'react';
import styled from 'styled-components';
import MockupDeviceWrapper from '../organism/MockupDeviceWrapper';

type Props = {};

const MockupBox = styled.div`
  position: absolute;
  right: -30px;
  top: -250px;
  box-sizing: border-box;
`;

const MockupWrapper = ({}: Props) => (
  <MockupBox>
    <MockupDeviceWrapper />
  </MockupBox>
);

export default MockupWrapper;
