import * as React from 'react';
import styled from 'styled-components';

type Props = { iconPath: string };

const IconSvg = styled.img`
  height: 50px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 45px;
  }
`;

const IconWrapper: React.FC<Props> = ({ iconPath }) => {
  return <IconSvg src={iconPath} alt="npmlogo" />;
};

export default IconWrapper;
