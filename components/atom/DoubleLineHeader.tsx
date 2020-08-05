import * as React from 'react';
import { reactDom } from 'react-dom';
import styled from 'styled-components';
import useScrollEvent from '../../utils/useScrollEvent';

type Props = { firstLine: String; secondLine: String };

const DoubleLineHeaderStyle = styled.h1`
  padding-top: 100px;
  color: ${({ theme }) => theme.colors.header};
  @media (max-width: 768px) {
    color: red;
  }

  .visible,
  .invisible {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .visible {
    opacity: 1;
  }
`;

const trigger = new ScrollTrigger();
trigger.add('[data-trigger]');

const DoubleLineHeader: React.FC<Props> = ({ firstLine, secondLine }) => {
  const { scrollPosition, scrollDirection } = useScrollEvent();
  return (
    <>
      <DoubleLineHeaderStyle className="test" data-trigger>
        {firstLine}
        <br />
        {secondLine}
      </DoubleLineHeaderStyle>
    </>
  );
};

export default DoubleLineHeader;
