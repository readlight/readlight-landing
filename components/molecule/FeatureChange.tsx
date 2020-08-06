import * as React from 'react';
import styled from 'styled-components';
import FeatureTextButton from '../atom/FeatureTextButton';

const FeatureChangeWrapper = styled.div`
  margin-top: 55px;
  padding: 0;
`;

const NavButtonList = () => (
  <FeatureChangeWrapper>
    <FeatureTextButton buttonText={'오늘의 책'} />
    <FeatureTextButton buttonText={'컬렉션'} />
    <FeatureTextButton buttonText={'리더스픽'} />
  </FeatureChangeWrapper>
);

export default NavButtonList;
