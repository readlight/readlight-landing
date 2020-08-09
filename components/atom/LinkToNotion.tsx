import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = { buttonText: string; targetPath: string };

const ButtonClickArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavText = styled.span`
  color: ${({ theme }) => theme.colors.pureBlack};
  font-size: 16px;
  font-weight: normal;
  padding: 10px 6px;
  margin: 0 12px;

  &:hover {
    cursor: pointer;
  }
`;

const NotionLink = 'https://naver.com';

const LinkToNotion: React.FC<Props> = ({ buttonText }) => {
  return (
    <ButtonClickArea
      onClick={() => {
        window.open(NotionLink);
      }}
    >
      <NavText>{buttonText}</NavText>
    </ButtonClickArea>
  );
};

export default LinkToNotion;
