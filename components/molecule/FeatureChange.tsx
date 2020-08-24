import * as React from 'react';
import styled from 'styled-components';
import FeatureTextButton from '../atom/FeatureTextButton';
import { FeatureList } from '../../types/FeatureList';

interface IProps {
  featureBooleanList: object;
  changeFeature: Function;
}

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

const NavButtonList = ({ featureBooleanList, changeFeature }: IProps) => {
  //const { feature, featureBooleanList, changeFeature } = useFeature();

  return (
    <FeatureChangeWrapper>
      <FeatureTextButton
        buttonText={'오늘의 책'}
        isSelected={featureBooleanList[FeatureList.BOOKOFTODAY]}
        featureType={FeatureList.BOOKOFTODAY}
        changeFeature={changeFeature}
      />
      <FeatureTextButton
        buttonText={'컬렉션'}
        isSelected={featureBooleanList[FeatureList.COLLECTION]}
        featureType={FeatureList.COLLECTION}
        changeFeature={changeFeature}
      />
      <FeatureTextButton
        buttonText={'북칼럼'}
        isSelected={featureBooleanList[FeatureList.READERSPICK]}
        featureType={FeatureList.READERSPICK}
        changeFeature={changeFeature}
      />
    </FeatureChangeWrapper>
  );
};

export default NavButtonList;
