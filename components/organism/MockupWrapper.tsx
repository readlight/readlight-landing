import * as React from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import MockupDevice from '../atom/MockupDevice';
import MockupImageWrapper from '../molecule/MockupImageWrapper';

interface IProps {
  imagePath?: string;
  left?: string;
  right?: string;
}

interface IMockupDeviceBox {
  visible: boolean;
}

const PositionWrapper = styled.div`
  position: relative;
  right: ${(props: IProps) => props.right};
  left: ${(props: IProps) => props.left};

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    position: static;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
`;

const MockupDeviceBox = styled.div`
  visibility: visible;
  opacity: ${(props: IMockupDeviceBox) => (props.visible ? '1' : '0.3')};
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

const MockupWrapper = ({ imagePath, left, right }: IProps) => {
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
