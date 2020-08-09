import * as React from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import MockupDevice from '../atom/MockupDevice';
import MockupImageWrapper from '../molecule/MockupImageWrapper';

type Props = { imagePath: string; left: string; right: string };

const PositionWrapper = styled.div`
  position: relative;
  right: ${(props) => props.right};
  left: ${(props) => props.left};

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    position: static;
    width: 100%;
  }
`;

const MockupDeviceBox = styled.div`
  visibility: visible;

  opacity: ${(props) => (props.visible ? '1' : '0.3')};
  transform: ${(props) =>
    props.visible ? 'translateY(30px)' : 'translate(0px)'};
  -webkit-transform: ${(props) =>
    props.visible ? 'translateY(30px)' : 'translate(0px)'};
  -webkit-transition: -webkit-transform 1s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.9s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
  transition: transform 1s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.9s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
`;

const ScrollTriggerWrapper: any = ScrollTrigger;

const MockupWrapper = ({ imagePath, left, right }: Props) => {
  const [visible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };
  return (
    <PositionWrapper left={left} right={right}>
      <ScrollTriggerWrapper onEnter={onEnterViewport} onExit={onExitViewport}>
        <MockupDeviceBox visible={visible}>
          <MockupDevice />
          <MockupImageWrapper imagePath={imagePath} />
        </MockupDeviceBox>
      </ScrollTriggerWrapper>
    </PositionWrapper>
  );
};

export default MockupWrapper;
