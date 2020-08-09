import * as React from 'react';
import styled from 'styled-components';
import useScrollEvent from '../../utils/useScrollEvent';

type Props = { children: React.ReactNode };

const NavbarBox = styled.div`
  padding: 0 20px;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${(props) =>
    props.scrollPosition > 2 ? 'white' : 'transparent'};
  transition: background-color 0.25s ease-in-out;
  --webkit-transform: background-color 0.25s ease-in-out;
`;

const NavbarWrapper: React.FC<Props> = ({ children }) => {
  const { scrollPosition, scrollDirection } = useScrollEvent();
  return <NavbarBox scrollPosition={scrollPosition}>{children}</NavbarBox>;
};

export default NavbarWrapper;
