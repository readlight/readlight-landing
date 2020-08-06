import React, { useState } from 'react';
import FeatureContext from './feature.context';
import { FeatureList } from '../types/FeatureList';

type Props = {
  children: React.ReactNode;
};

const FeatureProvider = ({ children }: Props) => {
  const changeFeature = (a) => {
    setFeature(a);
  };

  const initState = {
    feature: FeatureList.COLLECTION,
    changeFeature,
  };

  const [feature, setFeature] = useState(initState);

  return (
    <FeatureContext.Provider value={feature}>
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureProvider;
