import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  isBackgroundGray: boolean;
  desktopHeight: string;
  mobileHeight: string;
};

type HeightHandlerProps = {
  isBackgroundGray: boolean;
  desktopHeight: string;
  mobileHeight: string;
};

const HeightHandler = styled.div<HeightHandlerProps>`
  color: ${({ theme }) => theme.colors.header};
  height: ${(props) => props.desktopHeight};
  box-sizing: border-box;
  display: box;
  background-color: ${(props) =>
    props.isBackgroundGray
      ? ({ theme }) => theme.colors.lightGray
      : ({ theme }) => theme.colors.pureWhite};
  @media (max-width: 768px) {
    height: ${(props) => props.mobileHeight};
    color: red;
  }
`;

const Layout = ({
  children,
  isBackgroundGray,
  desktopHeight,
  mobileHeight,
}: Props) => (
  <HeightHandler
    isBackgroundGray={isBackgroundGray}
    desktopHeight={desktopHeight}
    mobileHeight={mobileHeight}
  >
    {children}
  </HeightHandler>
);

export default Layout;
