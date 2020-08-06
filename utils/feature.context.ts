import { createContext } from 'react';
import { create } from 'domain';
import { FeatureList } from '../types/FeatureList';

const FeatureContext = createContext({
  feature: FeatureList.COLLECTION,
  changeFeature: (a: FeatureList) => {},
});

export default FeatureContext;
