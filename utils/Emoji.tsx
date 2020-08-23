import React from 'react';
import styled from 'styled-components';

interface IProps {
  padding: string;
  emojiSize: string;
  symbol: any;
  label: string;
}

// styled-components의 Props용
interface StyledProps {
  padding: string;
  emojiSize: string;
}

// 계속 오버로드를 찾을 수 없다해서 다음과 같이 수정
const EmojiWrapper = styled.span<StyledProps>`
  padding: ${(props) => props.padding};
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
