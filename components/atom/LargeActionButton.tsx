import * as React from 'react';
import styled from 'styled-components';
import Emoji from '../../utils/Emoji';

type Props = { buttonText: string };

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
  transition: transform 0.5s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0, 0, 0.2, 1) 0.0001s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const LargeActionButton: React.FC<Props> = ({ buttonText }) => {
  return (
    <ButtonExpandArea>
      <ActionButton>
        {buttonText}
        <Emoji
          symbol="🙌"
          label="sheep"
          paddingLeft={'6px'}
          paddingRight={'0'}
          emojiSize={'20px'}
        />
      </ActionButton>
    </ButtonExpandArea>
  );
};

export default LargeActionButton;
