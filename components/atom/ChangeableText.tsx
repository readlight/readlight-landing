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

const TextWrapper = styled.div`
  @media (max-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ChangeableText = ({ feature }: Props) => {
  const textData = [
    '하루 3권, 인공지능이 당신의 독서 취향을 분석해 책을 추천해줍니다.',
    '리드라이트 큐레이터들이 최근의 이슈나 트렌드에 맞는 책들을 엄선해 제공합니다.',
    '큐레이터가 어떤 책에 대해 다양한 사람들과 함께 작성한 칼럼을 제공합니다.',
  ];
  return (
    <InlineText>
      <TextWrapper>
        <SmallText>{textData[feature]}</SmallText>
      </TextWrapper>
    </InlineText>
  );
};

export default ChangeableText;
