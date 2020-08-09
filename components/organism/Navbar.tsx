import * as React from 'react';
import styled from 'styled-components';
import NavButtonList from '../molecule/NavButtonList';
import LogoButton from '../atom/LogoButton';
import useScrollEvent from '../../utils/useScrollEvent';

type Props = { isMobile: boolean };

const NavbarContentWrapper = styled.div`
  position: relative;
  max-width: 1028px;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Navbar: React.FC<Props> = ({ isMobile }) => {
  const { scrollPosition, scrollDirection } = useScrollEvent();
  return (
    <NavbarContentWrapper>
      <LogoButton targetPath="/" />
      <NavButtonList scrollPosition={scrollPosition} isMobile={isMobile} />
    </NavbarContentWrapper>
  );
};

export default Navbar;
