import * as React from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import MockupDevice from '../atom/MockupDevice';

type Props = {};

const MockupDeviceBox = styled.div`
  visibility: visible;

  opacity: ${(props) => (props.visible ? '1' : '0.3')};
  transform: ${(props) =>
    props.visible ? 'translateY(30px)' : 'translate(0px)'};
  -webkit-transform: ${(props) =>
    props.visible ? 'translateY(30px)' : 'translate(0px)'};
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.9s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
  transition: transform 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.9s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
`;

const ScrollTriggerWrapper: any = ScrollTrigger;

const MockupWrapper = ({}: Props) => {
  const [visible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };
  return (
    <ScrollTriggerWrapper onEnter={onEnterViewport} onExit={onExitViewport}>
      <MockupDeviceBox visible={visible}>
        <MockupDevice />
      </MockupDeviceBox>
    </ScrollTriggerWrapper>
  );
};

export default MockupWrapper;
