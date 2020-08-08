import React, { useContext } from 'react';
import styled from 'styled-components';
import { FeatureList } from '../../types/FeatureList';

type Props = {
  buttonText: string;
  isSelected: boolean;
  featureType: FeatureList;
  changeFeature: Function;
};

// border-bottom: ${(props) => props.isSelected ? '2px solid #3B4048' : '0px solid'};

const NavText = styled.span`
  color: ${(props) => (props.isSelected ? 'black' : 'gray')};
  font-size: 17px;
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
  padding: 4px 1px;
  margin-right: 25px;
  transition: color 300ms ease-in-out;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

const FeatureTextButton: React.FC<Props> = ({
  buttonText,
  isSelected,
  featureType,
  changeFeature,
}) => {
  return (
    <NavText
      onClick={() => {
        changeFeature(featureType);
      }}
      isSelected={isSelected}
    >
      {buttonText}
    </NavText>
  );
};

export default FeatureTextButton;
