import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IProps {
  buttonText: string;
  targetPath: string;
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
  color: ${(props: INavText) => (props.isScrolled ? 'black' : '#808080')};
  font-size: 18px;
  font-weight: normal;
  padding: 10px 6px;
  margin: 0 12px;
  transition: color 230ms ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const NavTextButton = ({ buttonText, targetPath, isScrolled }: IProps) => {
  return (
    <ButtonClickArea>
      <Link href={targetPath}>
        <NavText isScrolled={isScrolled}>{buttonText}</NavText>
      </Link>
    </ButtonClickArea>
  );
};

export default NavTextButton;
