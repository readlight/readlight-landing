import { useState, useEffect } from 'react';
import { FeatureList } from '../types/FeatureList';

export default function useFeatureList(): {
  feature: FeatureList;
  featureBooleanList: boolean[];
  changeFeature: (featureType: FeatureList) => {};
} {
  const isClient = typeof window === 'object';

  function initState() {
    const data = {
      feature: FeatureList.COLLECTION,
      featureBooleanList: [false, true, false],
      changeFeature: change,
    };
    return data;
  }

  function change(featureType) {
    console.log('hi');
    console.log(featureType);
  }

  const [featureData, setFeatureData] = useState(initState);

  useEffect(() => {
    if (!isClient) {
      return;
    }
  }, []);

  return featureData;
}
