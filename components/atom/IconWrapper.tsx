import * as React from 'react';
import styled from 'styled-components';

type Props = { iconPath: string };

const IconSvg = styled.img`
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const IconWrapper: React.FC<Props> = ({ iconPath }) => {
  return <IconSvg src={iconPath} alt="npmlogo" />;
};

export default IconWrapper;
