import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import FeatureTextButton from '../atom/FeatureTextButton';
import FeatureContext from '../../utils/feature.context';

const FeatureChangeWrapper = styled.div`
  margin-top: 90px;
  padding: 0;
`;

const NavButtonList = () => {
  return (
    <FeatureChangeWrapper>
      <FeatureTextButton buttonText={'오늘의 책'} isSelected={false} />
      <FeatureTextButton buttonText={'컬렉션'} isSelected={true} />
      <FeatureTextButton buttonText={'리더스픽'} isSelected={false} />
    </FeatureChangeWrapper>
  );
};

export default NavButtonList;
