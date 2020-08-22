import IconWrapper from '../atom/IconWrapper';
import MoreFeatureContent from '../molecule/MoreFeatureContent';
import styled from 'styled-components';

interface IProps {
  headerText: string;
  iconPath: string;
  children: React.ReactNode;
}

const MoreFeatureBox = styled.div`
  display: flex;
  width: 32%;
  padding-top: 40px;

  @media (max-width: 768px) {
    width: 90%;
    padding-top: 40px;
  }
`;

const MoreFeature = ({ headerText, iconPath, children }: IProps) => {
  return (
    <MoreFeatureBox>
      <IconWrapper iconPath={iconPath} />
      <MoreFeatureContent headerText={headerText}>
        {children}
      </MoreFeatureContent>
    </MoreFeatureBox>
  );
};

export default MoreFeature;
