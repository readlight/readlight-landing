import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = { buttonText: string; targetPath: string; isScrolled: boolean };

const ButtonClickArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavText = styled.span`
  color: ${(props) => (props.isScrolled ? 'black' : 'white')};
  font-size: 16px;
  font-weight: normal;
  padding: 10px 6px;
  margin: 0 12px;
  transition: color 230ms ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const NavTextButton: React.FC<Props> = ({
  buttonText,
  targetPath,
  isScrolled,
}) => {
  return (
    <ButtonClickArea>
      <Link href={targetPath}>
        <NavText isScrolled={isScrolled}>{buttonText}</NavText>
      </Link>
    </ButtonClickArea>
  );
};

export default NavTextButton;
