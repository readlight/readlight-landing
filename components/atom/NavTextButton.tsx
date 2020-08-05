import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = { buttonText: string; targetPath: string };

const ButtonClickArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const NavText = styled.span`
  color: ${({ theme }) => theme.colors.pureBlack};
  font-size: 16px;
  font-weight: normal;
  padding: 5px 0px;
  margin: 0px 15px;

  &:hover {
    cursor: pointer;
  }
`;

const NavTextButton: React.FC<Props> = ({ buttonText, targetPath }) => {
  return (
    <ButtonClickArea>
      <Link href={targetPath}>
        <NavText>{buttonText}</NavText>
      </Link>
    </ButtonClickArea>
  );
};

export default NavTextButton;
