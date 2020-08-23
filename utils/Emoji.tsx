import React from 'react';
import styled from 'styled-components';

interface IProps {
  padding?: string;
  emojiSize?: string;
  symbol?: any;
  label?: string;
}

const EmojiWrapper = styled.span`
  padding: ${(props: IProps) => props.padding};
  font-size: ${(props) => props.emojiSize};
`;

const Emoji = ({ padding, emojiSize, symbol, label }: IProps) => (
  <EmojiWrapper
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    padding={padding}
    emojiSize={emojiSize}
  >
    {symbol}
  </EmojiWrapper>
);

export default Emoji;
