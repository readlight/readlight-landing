import ActiveSmallText from '../atom/ActiveSmallText';
import styled from 'styled-components';
import ScrollTrigger from 'react-scroll-trigger';

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  background-position: center center;
`;

const ImageCover = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 230px;
  opacity: ${(props) => (props.isActive ? '1.0' : '0.3')};
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

const AfterReadContent = ({ isActive, imagePath }) => {
  return (
    <AfterReadContentWrapper>
      <ImageCover isActive={isActive}>
        <ImageWrapper imagePath={imagePath} />
      </ImageCover>
      <ActiveSmallText isActive={isActive}>
        이렇고 저렇고
        <br />
        가나다라마바사
      </ActiveSmallText>
    </AfterReadContentWrapper>
  );
};

export default AfterReadContent;
