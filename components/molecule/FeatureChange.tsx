import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import FeatureTextButton from '../atom/FeatureTextButton';
//import FeatureContext from '../../utils/feature.context';
import featureStorage from '../../utils/featureStorage';
import { FeatureList } from '../../types/FeatureList';
import useScrollEvent from '../../utils/useScrollEvent';

const FeatureChangeWrapper = styled.div`
  margin-top: 90px;
  padding: 0;
`;

const NavButtonList = () => {
  const [featureData, setFeatureData] = useState(featureStorage());
  //const { featureBooleanList, feature } = useFeatureList();

  const resetFeature = () => {
    setFeatureData(featureStorage());
    console.log(featureData);
  };

  useEffect(() => {
    resetFeature();
  });

  return (
    <FeatureChangeWrapper>
      {featureData.feature}
      <FeatureTextButton
        buttonText={'오늘의 책'}
        isSelected={featureData.featureBooleanList[0]}
        featureType={FeatureList.BOOKOFTODAY}
        changeFeature={featureData.changeFeature}
      />
      <FeatureTextButton
        buttonText={'컬렉션'}
        isSelected={featureData.featureBooleanList[1]}
        featureType={FeatureList.COLLECTION}
        changeFeature={featureData.changeFeature}
      />
      <FeatureTextButton
        buttonText={'리더스픽'}
        isSelected={featureData.featureBooleanList[2]}
        featureType={FeatureList.READERSPICK}
        changeFeature={featureData.changeFeature}
      />
    </FeatureChangeWrapper>
  );
};

export default NavButtonList;
