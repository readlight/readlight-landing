import * as React from 'react';
import styled from 'styled-components';
import NavTextButton from '../atom/NavTextButton';
import LargeActionButton from '../atom/LargeActionButton';

const NavListWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  text-align: right;
  box-sizing: border-box;
`;

const NavButtonList = () => (
  <NavListWrapper>
    <NavTextButton buttonText={'회사 소개'} targetPath={'/company'} />
    <NavTextButton buttonText={'자주 묻는 질문'} targetPath={'/question'} />
    <NavTextButton buttonText={'뭔가 하나만더'} targetPath={'/more'} />
    <LargeActionButton buttonText={'펀딩하기'} />
  </NavListWrapper>
);

export default Navbar;
