import React, { useState } from 'react';
import styled from 'styled-components';
import SmallText from './SmallText';
import useFeature from '../../utils/useFeature';
import { FeatureList } from '../../types/FeatureList';

type Props = {
  feature: FeatureList;
};

const InlineText = styled.span`
  color: ${({ theme }) => theme.colors.pureBlack};

  @media (max-width: 768px) {
  }
`;
const ChangeableText = ({ feature }: Props) => {
  const textData = ['안녕하세요', '반갑습니다', '오예'];
  return (
    <InlineText>
      <SmallText>{textData[feature]}</SmallText>
    </InlineText>
  );
};

export default ChangeableText;
