import * as React from 'react';
import styled from 'styled-components';
import Emoji from '../../utils/Emoji';

type Props = { buttonText: string; scrollPosition: number };

const ButtonExpandArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
`;

const ActionButton = styled.button`
  color: ${({ theme }) => theme.colors.pureWhite};
  background-color: ${({ theme }) => theme.colors.pointBlue};
  font-size: 16px;
  font-weight: bold;
  padding: 5px 14px;
  border: 0px solid;
  border-radius: 5px;
  outline: none;

  transform: scale(1);
  -webkit-transform: scale(1);
  transition: transform 0.5s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.2s ease-in-out;
  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
    opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const LargeActionButton: React.FC<Props> = ({ buttonText, scrollPosition }) => {
  return (
    <ButtonExpandArea>
      <ActionButton
        scrollPosition={scrollPosition}
        onClick={() => {
          window.open('https://otrade.co/contest/60/1242');
        }}
      >
        {buttonText}
        <Emoji
          symbol="🙌"
          label="rasing hands"
          padding={'6px 0px 0px 6px'}
          emojiSize={'20px'}
        />
      </ActionButton>
    </ButtonExpandArea>
  );
};

export default LargeActionButton;
