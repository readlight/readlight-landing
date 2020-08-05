import React from 'react';
import styled from 'styled-components';

type Props = {
  paddingLeft: string;
  paddingRight: string;
  emojiSize: string;
  symbol: any;
  label: string;
};

const EmojiWrapper = styled.span`
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  font-size: ${(props) => props.emojiSize};
`;

const Emoji: React.FC<Props> = ({
  paddingLeft,
  paddingRight,
  emojiSize,
  symbol,
  label,
}) => (
  <EmojiWrapper
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    emojiSize={emojiSize}
  >
    {symbol}
  </EmojiWrapper>
);

export default Emoji;
