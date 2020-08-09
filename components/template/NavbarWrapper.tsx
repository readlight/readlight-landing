import React, { useState } from 'react';
import styled from 'styled-components';
import useScrollEvent from '../../utils/useScrollEvent';
import Navbar from '../organism/Navbar';

type Props = { isMobile: boolean };

const NavbarBox = styled.div`
  padding: 0 20px;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${(props) =>
    props.isCliked || props.scrollPosition > 2 ? 'white' : 'transparent'};
  transition: background-color 0.25s ease-in-out;
  --webkit-transform: background-color 0.25s ease-in-out;
`;

const NavbarWrapper: React.FC<Props> = ({ isMobile }) => {
  const { scrollPosition, scrollDirection } = useScrollEvent();
  const [isCliked, setIsClicked] = useState(false);

  const changeClicked = () => {
    setIsClicked(!isCliked);
  };
  return (
    <NavbarBox scrollPosition={scrollPosition} isCliked={isCliked}>
      <Navbar isMobile={isMobile} changeClicked={changeClicked} />
    </NavbarBox>
  );
};

export default NavbarWrapper;
