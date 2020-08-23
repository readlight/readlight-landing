import * as React from 'react';
import ActiveSmallText from '../atom/ActiveSmallText';
import styled from 'styled-components';

interface IProps {
  isActive?: boolean;
  imagePath?: string;
  children?: React.ReactNode;
}

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props : IProps) => props.imagePath});
  background-size: cover;
  background-position: center center;
`;

const ImageCover = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 230px;
  opacity: ${(props : IProps) => (props.isActive ? '1.0' : '0.3')};
  transition: opacity 230ms ease-out;
  margin-bottom: 10px;
`;

const AfterReadContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const AfterReadContent = ({ isActive, imagePath, children }: IProps) => {
  return (
    <AfterReadContentWrapper>
      <ImageCover isActive={isActive}>
        <ImageWrapper imagePath={imagePath} />
      </ImageCover>
      <div style={{ width: '100%' }}>
        <ActiveSmallText isActive={isActive}>{children}</ActiveSmallText>
      </div>
    </AfterReadContentWrapper>
  );
};

export default AfterReadContent;
