import styled from 'styled-components';
import { useState } from 'react';
import AfterReadContent from '../molecule/AfterReadContent';
import ActiveHeaderBox from '../molecule/ActiveHeaderBox';
import MoreInformation from '../atom/MoreInformationButton';

type Props = {
  subText: string;
  children: React.ReactNode;
  targetPath: string;
  imagePath: string;
};

const AfterReadCaseWrapper = styled.div`
  width: 48%;
`;

const AfterReadCase = ({ subText, children, targetPath, imagePath }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const activate = () => {
    setIsActive(true);
  };

  const deactivate = () => {
    setIsActive(false);
  };
  return (
    <AfterReadCaseWrapper onMouseEnter={activate} onMouseLeave={deactivate}>
      <ActiveHeaderBox subText={subText} isActive={isActive}>
        {children}
      </ActiveHeaderBox>
      <AfterReadContent isActive={isActive} imagePath={imagePath} />
      <MoreInformation
        buttonText={'자세히 알아보기'}
        targetPath={targetPath}
        isActive={isActive}
      />
    </AfterReadCaseWrapper>
  );
};

export default AfterReadCase;
