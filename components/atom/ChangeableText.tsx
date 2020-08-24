import React, { useState } from 'react';
import styled from 'styled-components';
import SmallText from './SmallText';
import { FeatureList } from '../../types/FeatureList';

interface IProps {
  textData: string;
}

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

const ChangeableText = ({ textData }: IProps) => {
  return (
    <InlineText>
      <TextWrapper>
        <SmallText>{textData}</SmallText>
      </TextWrapper>
    </InlineText>
  );
};

export default ChangeableText;
