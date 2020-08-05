import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import useScrollEvent from '../../utils/useScrollEvent';
import ScrollTrigger from 'react-scroll-trigger';

type Props = { firstLine: String; secondLine: String };

type DoubleLineHeaderStyle = {
  visible: boolean;
};

const DoubleLineHeaderStyle = styled.h1`
  color: ${({ theme }) => theme.colors.header};

  opacity: ${(props) => (props.visible ? '1' : '0.3')};
  transform: ${(props) =>
    props.visible ? 'translateY(30px)' : 'translate(0px)'};
  -webkit-transform: ${(props) =>
    props.visible ? 'translateY(30px)' : 'translate(0px)'};
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
  transition: transform 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s;

  @media (max-width: 768px) {
  }
`;

const DoubleLineHeader: React.FC<Props> = ({ firstLine, secondLine }) => {
  const [visible, setVisible] = useState(false);
  const { scrollPosition, scrollDirection } = useScrollEvent();

  const onEnterViewport = () => {
    console.log('hi');
    setVisible(true);
  };

  const onExitViewport = () => {
    console.log('by');
    setVisible(false);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <DoubleLineHeaderStyle visible={visible}>
        {firstLine}
        <br />
        {secondLine}
      </DoubleLineHeaderStyle>
      <style jsx>
        {`
          .startAnimation {
            color: red;
          }
        `}
      </style>
    </ScrollTrigger>
  );
};

export default DoubleLineHeader;
