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
    text-align: center;
  }
`;
const ChangeableText = ({ feature }: Props) => {
  const textData = ['안녕하세요', '반갑습니다 가나다라마바사', '오예'];
  return (
    <InlineText>
      <div>
        <SmallText>{textData[feature]}</SmallText>
      </div>
    </InlineText>
  );
};

export default ChangeableText;
