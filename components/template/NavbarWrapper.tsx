import React, { useState } from 'react';
import styled from 'styled-components';
import useScrollEvent from '../../utils/useScrollEvent';
import Navbar from '../organism/Navbar';

interface IProps {
  isMobile: boolean;
}

interface INavbarBox {
  scrollPosition: number;
  isClicked: boolean;
}

const NavbarBox = styled.div`
  padding: 0 20px;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${(props: INavbarBox) =>
    props.isClicked || props.scrollPosition > 2 ? 'white' : 'transparent'};
  transition: background-color 0.25s ease-in-out;
  --webkit-transform: background-color 0.25s ease-in-out;
`;

const NavbarWrapper = ({ isMobile }: IProps) => {
  const { scrollPosition, scrollDirection } = useScrollEvent();
  const [isClicked, setIsClicked] = useState(false);

  const changeClicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <NavbarBox scrollPosition={scrollPosition} isClicked={isClicked}>
      <Navbar isMobile={isMobile} changeClicked={changeClicked} />
    </NavbarBox>
  );
};

export default NavbarWrapper;
