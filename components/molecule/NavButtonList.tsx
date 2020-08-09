import * as React from 'react';
import styled from 'styled-components';
import NavTextButton from '../atom/NavTextButton';
import LargeActionButton from '../atom/LargeActionButton';

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

const NavButtonList = ({ isMobile, scrollPosition }) => {
  return (
    <NavListWrapper>
      {isMobile ? (
        <img src="/bars-solid.svg" style={{ height: '25px' }} />
      ) : (
        <>
          <NavTextButton buttonText={'회사 소개'} targetPath={'/company'} />
          <NavTextButton buttonText={'자주 묻는 질문'} targetPath={'/faq'} />
          <LargeActionButton
            buttonText={'펀딩하기'}
            scrollPosition={scrollPosition}
          />
        </>
      )}
    </NavListWrapper>
  );
};

export default NavButtonList;
