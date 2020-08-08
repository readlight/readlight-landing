import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'react-scroll-trigger';

type Props = { headerText: String };

const SingleLineHeaderStyle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.header};
  opacity: ${(props) => (props.visible ? '1' : '0.3')};
  transform: ${(props) =>
    props.visible ? 'translateY(30px)' : 'translate(0px)'};
  -webkit-transform: ${(props) =>
    props.visible ? 'translateY(30px)' : 'translate(0px)'};
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.9s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
  transition: transform 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.9s cubic-bezier(0, 0, 0.2, 1) 0.0001s;

  @media (max-width: 768px) {
  }
`;

const ScrollTriggerWrapper: any = ScrollTrigger;

const DoubleLineHeader: React.FC<Props> = ({ headerText }) => {
  const [visible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };

  return (
    <ScrollTriggerWrapper onEnter={onEnterViewport} onExit={onExitViewport}>
      <SingleLineHeaderStyle visible={visible}>
        {headerText}
      </SingleLineHeaderStyle>
    </ScrollTriggerWrapper>
  );
};

export default DoubleLineHeader;
