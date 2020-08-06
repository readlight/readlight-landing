import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = { buttonText: string };

const NavText = styled.span`
  color: ${({ theme }) => theme.colors.pureBlack};
  font-size: 18px;
  font-weight: bold;
  padding: 4px 1px;
  margin-right: 25px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.header};

  &:hover {
    cursor: pointer;
  }
`;

const changeFeature = () => {
  console.log('change');
};

const FeatureTextButton: React.FC<Props> = ({ buttonText }) => {
  return <NavText onClick={changeFeature}>{buttonText}</NavText>;
};

export default FeatureTextButton;
