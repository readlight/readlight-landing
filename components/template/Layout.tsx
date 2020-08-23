import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  isBackgroundGray: boolean;
  desktopHeight: string;
  mobileHeight: string;
}

interface IHeightHandlerProps {
  isBackgroundGray: boolean;
  desktopHeight: string;
  mobileHeight: string;
}

const HeightHandler = styled.div`
  color: ${({ theme }) => theme.colors.header};
  height: ${(props: IHeightHandlerProps) => props.desktopHeight};
  box-sizing: border-box;
  display: box;
  background-color: ${(props) =>
    props.isBackgroundGray
      ? ({ theme }) => theme.colors.lightGray
      : ({ theme }) => theme.colors.pureWhite};
  @media (max-width: 768px) {
    height: ${(props) => props.mobileHeight};
    min-height: 720px;
  }
`;

const Layout = ({
  children,
  isBackgroundGray,
  desktopHeight,
  mobileHeight,
}: IProps) => (
  <HeightHandler
    isBackgroundGray={isBackgroundGray}
    desktopHeight={desktopHeight}
    mobileHeight={mobileHeight}
  >
    {children}
  </HeightHandler>
);

export default Layout;
