import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  desktopHeight: string;
  mobileHeight: string;
};

type HeightHandlerProps = {
  desktopHeight: string;
  mobileHeight: string;
};

const ImageBox = styled.div<HeightHandlerProps>`
  position: relative;
  height: ${(props) => props.desktopHeight};
  width: 100vw;

  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-image: url('/testbackground.jpg');
  @media (max-width: 768px) {
    height: ${(props) => props.mobileHeight};
    color: red;
  }
`;

const ImageWrapper = ({ children, desktopHeight, mobileHeight }: Props) => (
  <ImageBox desktopHeight={desktopHeight} mobileHeight={mobileHeight}>
    {children}
  </ImageBox>
);

export default ImageWrapper;
