import { useState, useEffect } from 'react';
import { FeatureList } from '../types/FeatureList';

export default function useFeature(): {
  feature: FeatureList;
  featureBooleanList: object;
  changeFeature: (featureType: FeatureList) => void;
} {
  function updateFeature(featureType) {
    let newBooleanList = {
      'bookoftoday' : false,
      'collection' : false,
      'readerspick' : false
    };
    newBooleanList[featureType] = true;
    const newState = {
      feature: featureType,
      featureBooleanList: newBooleanList,
      changeFeature: changeEventListner,
    };
    //console.log(newState);
    return newState;
  }

  function returnUpdateFeature() {
    //console.log(featureData);
    return featureData;
  }

  function changeEventListner(featureType) {
    setFeatureData(updateFeature(featureType));
  }

  const [featureData, setFeatureData] = useState(
    updateFeature(FeatureList.BOOKOFTODAY)
  );

  useEffect(() => {
    returnUpdateFeature();
  }, [featureData]);

  return featureData;
}
