import * as React from 'react';
import styled from 'styled-components';
import NavTextButton from '../atom/NavTextButton';
import LargeActionButton from '../atom/LargeActionButton';
import useWindowSize from '../../utils/useWindowSize';

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

const NavButtonList = () => {
  const { width } = useWindowSize();

  return (
    <NavListWrapper>
      {width < 768 ? (
        <img src="/bars-solid.svg" style={{ height: '25px' }} />
      ) : (
        <>
          <NavTextButton buttonText={'회사 소개'} targetPath={'/company'} />
          <NavTextButton
            buttonText={'자주 묻는 질문'}
            targetPath={'/question'}
          />
          <NavTextButton buttonText={'뭔가 하나만더'} targetPath={'/more'} />
          <LargeActionButton buttonText={'펀딩하기'} />
        </>
      )}
    </NavListWrapper>
  );
};

export default NavButtonList;
