import React, { useState } from 'react';
import styled from 'styled-components';
import NavTextButton from '../atom/NavTextButton';
import LargeActionButton from '../atom/LargeActionButton';
import LinkToNotion from '../atom/LinkToNotion';

const NavListWrapper = styled.div`
  overflow: hidden;
  text-align: right;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  height: 100%;
`;

const NavButtonList = ({ isMobile, scrollPosition, isScrolled }) => {
  const [isClicked, setIsClicked] = useState(false);

  const switchClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <NavListWrapper>
      <LinkToNotion buttonText={'회사 소개'} isScrolled={isScrolled} />
      <NavTextButton
        buttonText={'자주 묻는 질문'}
        targetPath={'/faq'}
        isScrolled={isScrolled}
      />
      <LargeActionButton
        buttonText={'펀딩하기'}
        scrollPosition={scrollPosition}
      />
    </NavListWrapper>
  );
};

export default NavButtonList;
