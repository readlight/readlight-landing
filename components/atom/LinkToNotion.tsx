import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IProps {
  buttonText: string;
  isScrolled: boolean;
}

interface INavText {
  isScrolled: boolean;
}

const ButtonClickArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavText = styled.span`
  color: ${(props: INavText) => (props.isScrolled ? 'black' : 'white')};
  font-size: 16px;
  font-weight: normal;
  padding: 10px 6px;
  margin: 0 12px;

  transition: color 230ms ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const NotionLink =
  'https://www.notion.so/ReadLab-8d301cb2241349d4aeb41727720704e3';

const LinkToNotion = ({ buttonText, isScrolled }: IProps) => {
  return (
    <ButtonClickArea
      onClick={() => {
        window.open(NotionLink);
      }}
    >
      <NavText isScrolled={isScrolled}>{buttonText}</NavText>
    </ButtonClickArea>
  );
};

export default LinkToNotion;
