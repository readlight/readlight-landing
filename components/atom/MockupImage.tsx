import * as React from 'react';
import styled from 'styled-components';

type Props = { path: string };

const ScreenImage = styled.img`
  position: absolute;
  width: 274px;
  height: auto;
  z-index: 2;
  border-style: none;
`;

const MockupDeviceWrapper = ({ path }: Props) => <ScreenImage src={path} />;

export default MockupDeviceWrapper;
