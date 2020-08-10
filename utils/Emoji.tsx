import React from 'react';
import styled from 'styled-components';

type Props = {
  padding: string;
  emojiSize: string;
  symbol: any;
  label: string;
};

const EmojiWrapper = styled.span`
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.emojiSize};
`;

const Emoji = ({ padding, emojiSize, symbol, label }: Props) => (
  <EmojiWrapper
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
    padding={padding}
    emojiSize={emojiSize}
  >
    {symbol}
  </EmojiWrapper>
);

export default Emoji;
