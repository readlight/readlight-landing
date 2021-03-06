import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'react-scroll-trigger';

interface IProps {
  subText: string;
  textAlign: string;
}

interface ISubSingleHeaderStyle {
  textAlign: string;
  visible: boolean;
}

const SubSingleHeaderStyle = styled.h2`
  text-align: ${(props: ISubSingleHeaderStyle) => props.textAlign};
  color: ${({ theme }) => theme.colors.subHeader};

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
    text-align: center;
    transition: none;
    transform: translateY(50px);
    opacity: 1;
  }
`;

const ScrollTriggerWrapper: any = ScrollTrigger;

const SubSingleHeader = ({ subText, textAlign }: IProps) => {
  const [visible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };

  return (
    <ScrollTriggerWrapper onEnter={onEnterViewport} onExit={onExitViewport}>
      <SubSingleHeaderStyle visible={visible} textAlign={textAlign}>
        {subText}
      </SubSingleHeaderStyle>
    </ScrollTriggerWrapper>
  );
};

export default SubSingleHeader;
