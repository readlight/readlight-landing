import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IProps {
  targetPath: string;
}

const LogoButtonClickArea = styled.div`
  float: left;
`;

const LogoSvg = styled.img`
  margin-top: 22px;
  height: 28px;

  &:hover {
    cursor: pointer;
  }
`;

const LogoButton = ({ targetPath }: IProps) => {
  return (
    <LogoButtonClickArea>
      <Link href={targetPath}>
        <LogoSvg src="/textlogo.svg" alt="npmlogo" />
      </Link>
    </LogoButtonClickArea>
  );
};

export default LogoButton;
