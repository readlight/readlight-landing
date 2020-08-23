import * as React from 'react';
import styled from 'styled-components';

const Device = styled.img`
  width: 526px;
  height: 789px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    width: 410px;
    height: auto;
  }
`;

const MockupDevice = () => <Device src="/device.png" />;

export default MockupDevice;
