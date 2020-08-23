import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IProps {
  buttonText: string;
  targetPath: string;
  isActive: boolean;
}

interface INavText {
  isActive: boolean;
}

const NavText = styled.span`
  color: ${(props: INavText) => (props.isActive ? '#0E62FF' : '#C6C6C6')};
  font-size: 16px;
  font-weight: bold;
  transition: color 230ms ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const MoreInformationButton = ({
  buttonText,
  targetPath,
  isActive,
}: IProps) => {
  return (
    <Link href={targetPath}>
      <NavText isActive={isActive}>{buttonText}</NavText>
    </Link>
  );
};

export default MoreInformationButton;
