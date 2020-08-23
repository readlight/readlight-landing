import React, { useState } from 'react';
import styled from 'styled-components';
import NavButtonList from '../molecule/NavButtonList';
import LogoButton from '../atom/LogoButton';
import useScrollEvent from '../../utils/useScrollEvent';
import NavTextButton from '../atom/NavTextButton';
import LargeActionButton from '../atom/LargeActionButton';
import LinkToNotion from '../atom/LinkToNotion';

interface IProps {
  isMobile: boolean;
  changeClicked: () => void;
}

interface IReactiveNav {
  isClicked: boolean;
  scrollPosition: number;
}

const NavbarContentWrapper = styled.div`
  position: relative;
  max-width: 1028px;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  box-sizing: border-box;
`;

const FlexWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const BarImage = styled.img`
  height: 25px;
  margin-top: 5px;
`;

const ReactiveNav = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background-color: ${(props: IReactiveNav) =>
    props.isClicked ? 'white' : 'transparent'};
  opacity: ${(props) => (props.isClicked ? '1.0' : '0')};
  transition: opacity 0.25s ease-in-out, background-color 0.25s ease-in-out;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navbar = ({ isMobile, changeClicked }: IProps) => {
  const { scrollPosition, scrollDirection } = useScrollEvent();
  const [isClicked, setIsClicked] = useState(false);

  const switchClicked = () => {
    setIsClicked(!isClicked);
    changeClicked();
  };

  return (
    <>
      <NavbarContentWrapper>
        <FlexWrapper>
          <LogoButton targetPath="/" />
          {isMobile ? (
            <BarImage
              src="/bars-solid.svg"
              onClick={() => {
                switchClicked();
              }}
            />
          ) : (
            <NavButtonList isScrolled={scrollPosition > 2} />
          )}
        </FlexWrapper>
      </NavbarContentWrapper>

      {isMobile && (
        <ReactiveNav isClicked={isClicked} scrollPosition={scrollPosition}>
          <LinkToNotion buttonText={'회사 소개'} isScrolled={true} />
          <NavTextButton
            buttonText={'자주 묻는 질문'}
            targetPath={'/faq'}
            isScrolled={true}
          />
          <LargeActionButton buttonText={'펀딩하기'} />
        </ReactiveNav>
      )}
    </>
  );
};

export default Navbar;
