import IconWrapper from '../atom/IconWrapper';
import MoreFeatureContent from '../molecule/MoreFeatureContent';
import styled from 'styled-components';

type Props = {
  headerText: string;
  iconPath: string;
  children: React.ReactNode;
};

const MoreFeatureBox = styled.div`
  display: flex;
  width: 32%;
  padding-top: 40px;
`;

const MoreFeature: React.FC<Props> = ({ headerText, iconPath, children }) => {
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
