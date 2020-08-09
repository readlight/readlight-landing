import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = { buttonText: string; isScrolled: boolean };

const ButtonClickArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavText = styled.span`
  color: ${(props) => (props.isScrolled ? 'black' : 'white')};
  font-size: 16px;
  font-weight: normal;
  padding: 10px 6px;
  margin: 0 12px;

  transition: color 230ms ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const NotionLink =
  'https://www.notion.so/ReadLab-8d301cb2241349d4aeb41727720704e3';

const LinkToNotion: React.FC<Props> = ({ buttonText, isScrolled }) => {
  return (
    <ButtonClickArea
      onClick={() => {
        window.open(NotionLink);
      }}
    >
      <NavText isScrolled={isScrolled}>{buttonText}</NavText>
    </ButtonClickArea>
  );
};

export default LinkToNotion;
