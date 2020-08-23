import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  iconPath: string;
}

const IconSvg = styled.img`
  height: 50px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 45px;
  }
`;

const IconWrapper = ({ iconPath }: IProps) => {
  return <IconSvg src={iconPath} alt="npmlogo" />;
};

export default IconWrapper;
