import styled from 'styled-components';
import { useState } from 'react';
import AfterReadContent from '../molecule/AfterReadContent';
import ActiveHeaderBox from '../molecule/ActiveHeaderBox';
import MoreInformation from '../atom/MoreInformationButton';
import useScrollEvent from '../../utils/useScrollEvent';
import ScrollTrigger from 'react-scroll-trigger';

type Props = {
  subText: string;
  children: React.ReactNode;
  targetPath: string;
  imagePath: string;
  isMobile: boolean;
};

const AfterReadCaseWrapper = styled.div`
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }
`;

const ScrollTriggerWrapper: any = ScrollTrigger;

const AfterReadCase = ({
  subText,
  children,
  targetPath,
  imagePath,
  isMobile,
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const onEnterViewport = () => {
    setIsActive(true);
  };

  const onExitViewport = () => {
    setIsActive(false);
  };

  const activate = () => {
    setIsActive(true);
  };

  const deactivate = () => {
    setIsActive(false);
  };

  return (
    <>
      {isMobile ? (
        <AfterReadCaseWrapper onMouseEnter={activate} onMouseLeave={deactivate}>
          <ActiveHeaderBox subText={subText} isActive={isActive}>
            {children}
          </ActiveHeaderBox>
          <AfterReadContent isActive={isActive} imagePath={imagePath} />
          <ScrollTriggerWrapper
            onEnter={onEnterViewport}
            onExit={onExitViewport}
          >
            <MoreInformation
              buttonText={'자세히 알아보기'}
              targetPath={targetPath}
              isActive={isActive}
            />
          </ScrollTriggerWrapper>
        </AfterReadCaseWrapper>
      ) : (
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
      )}
    </>
  );
};

export default AfterReadCase;
