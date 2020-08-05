import * as React from 'react';
import styled from 'styled-components';
import NavButtonList from '../molecule/NavbuttonList';

type Props = {
  children: React.ReactNode;
};

const NavbarContentWrapper = styled.div`
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
      <NavButtonList />
    </NavbarContentWrapper>
  );
};

export default Navbar;
