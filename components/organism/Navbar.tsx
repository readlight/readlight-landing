import * as React from 'react';
import styled from 'styled-components';
import NavButtonList from '../molecule/NavButtonList';
import LogoButton from '../atom/LogoButton';

type Props = {};

const NavbarContentWrapper = styled.div`
  position: relative;
  max-width: 1064px;
  margin-left: auto;
  margin-right: auto;
  padding: 9 12px;
  height: 60px;
  box-sizing: border-box;
`;

const Navbar: React.FC<Props> = () => {
  return (
    <NavbarContentWrapper>
      <LogoButton targetPath="/" />
      <NavButtonList />
    </NavbarContentWrapper>
  );
};

export default Navbar;
