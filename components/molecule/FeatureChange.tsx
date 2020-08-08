import React from 'react';
import styled from 'styled-components';
import FeatureTextButton from '../atom/FeatureTextButton';
import useFeature from '../../utils/useFeature';
import { FeatureList } from '../../types/FeatureList';

const FeatureChangeWrapper = styled.div`
  margin-top: 90px;
  padding: 0;
`;

const NavButtonList = ({ feature, featureBooleanList, changeFeature }) => {
  //const { feature, featureBooleanList, changeFeature } = useFeature();

  return (
    <FeatureChangeWrapper>
      <FeatureTextButton
        buttonText={'오늘의 책'}
        isSelected={featureBooleanList[0]}
        featureType={FeatureList.BOOKOFTODAY}
        changeFeature={changeFeature}
      />
      <FeatureTextButton
        buttonText={'컬렉션'}
        isSelected={featureBooleanList[1]}
        featureType={FeatureList.COLLECTION}
        changeFeature={changeFeature}
      />
      <FeatureTextButton
        buttonText={'리더스픽'}
        isSelected={featureBooleanList[2]}
        featureType={FeatureList.READERSPICK}
        changeFeature={changeFeature}
      />
    </FeatureChangeWrapper>
  );
};

export default NavButtonList;
