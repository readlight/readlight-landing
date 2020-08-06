import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import FeatureContext from '../../utils/feature.context';
import { FeatureList } from '../../types/FeatureList';

type Props = { buttonText: string; isSelected: boolean };

const NavText = styled.span`
  color: ${({ theme }) => theme.colors.pureBlack};
  font-size: 17px;
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
  padding: 4px 1px;
  margin-right: 25px;
  border-bottom: ${(props) =>
    props.isSelected ? '2px solid #3B4048' : '0px solid'};
  transition: color 230ms ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const FeatureTextButton: React.FC<Props> = ({ buttonText, isSelected }) => {
  //const { changeFeature } = useContext(FeatureContext);
  return (
    <NavText onClick={() => {}} isSelected={isSelected}>
      {buttonText}
    </NavText>
  );
};

export default FeatureTextButton;
