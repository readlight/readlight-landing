import ActiveSmallText from '../atom/ActiveSmallText';
import styled from 'styled-components';

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
`;

const AfterReadContent = ({ isActive, imagePath }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        marginBottom: '25px',
      }}
    >
      <ImageCover isActive={isActive}>
        <ImageWrapper imagePath={imagePath} />
      </ImageCover>
      <ActiveSmallText isActive={isActive}>
        이렇고 저렇고
        <br />
        가나다라마바사
      </ActiveSmallText>
    </div>
  );
};

export default AfterReadContent;
