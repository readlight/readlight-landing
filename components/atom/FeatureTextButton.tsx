import React, { useContext } from 'react';
import styled from 'styled-components';
import { FeatureList } from '../../types/FeatureList';

interface IProps {
  buttonText: string;
  isSelected: boolean;
  featureType: FeatureList;
  changeFeature: Function;
}

interface NavText {
  isSelected: boolean;
}

const NavText = styled.span`
  color: ${(props: NavText) => (props.isSelected ? '#0E62FF' : '#C6C6C6')};
  font-size: 20px;
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'bold')};
  border-bottom: ${(props) =>
    props.isSelected ? '3px solid #0E62FF' : '0px solid'};
  padding: 2px 1px;
  margin-right: 25px;
  transition: color 200ms ease-in-out;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FeatureTextButton = ({
  buttonText,
  isSelected,
  featureType,
  changeFeature,
}: IProps) => {
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
