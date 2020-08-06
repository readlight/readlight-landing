import * as React from 'react';
import styled from 'styled-components';
import NavButtonList from '../molecule/NavButtonList';
import LogoButton from '../atom/LogoButton';

type Props = { children: React.ReactNode };

const NavbarBox = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.pureWhite};
  transition: background-color 0.25s ease-in-out;
  --webkit-transform: background-color 0.25s ease-in-out;
`;

const NavbarWrapper: React.FC<Props> = ({ children }) => {
  return <NavbarBox>{children}</NavbarBox>;
};

export default NavbarWrapper;
