import React from 'react';
import styled from 'styled-components';
import FeatureTextButton from '../atom/FeatureTextButton';
import { FeatureList } from '../../types/FeatureList';

const FeatureChangeWrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 15px;
  padding: 0;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 15px;
    text-align: center;
  }
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
