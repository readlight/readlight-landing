import * as React from 'react';
import styled from 'styled-components';

type Props = {};

const Device = styled.img`
  width: 526px;
  height: 789px;
  position: relative;
  z-index: 10;
`;

const MockupWrapper = ({}: Props) => <Device src="/device.png" />;

export default MockupWrapper;
