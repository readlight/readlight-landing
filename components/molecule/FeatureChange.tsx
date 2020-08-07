import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import FeatureTextButton from '../atom/FeatureTextButton';
//import FeatureContext from '../../utils/feature.context';
import useFeature from '../../utils/useFeatureList';
import { FeatureList } from '../../types/FeatureList';

const FeatureChangeWrapper = styled.div`
  margin-top: 90px;
  padding: 0;
`;

const NavButtonList = () => {
  const { featureBooleanList } = useFeature();
  return (
    <FeatureChangeWrapper>
      <FeatureTextButton
        buttonText={'오늘의 책'}
        isSelected={featureBooleanList[0]}
        featureType={FeatureList.BOOKOFTODAY}
      />
      <FeatureTextButton
        buttonText={'컬렉션'}
        isSelected={featureBooleanList[1]}
        featureType={FeatureList.COLLECTION}
      />
      <FeatureTextButton
        buttonText={'리더스픽'}
        isSelected={featureBooleanList[2]}
        featureType={FeatureList.READERSPICK}
      />
    </FeatureChangeWrapper>
  );
};

export default NavButtonList;
