import * as React from 'react';
import styled from 'styled-components';

type Props = { firstLine: String; secondLine: String };

const DoubleLineHeaderStyle = styled.h1`
  padding-top: 100px;
  color: ${({ theme }) => theme.colors.header};
  transform: translateY(0) scale(1);
  visibility: visible;
  transition: transform 0.7s cubic-bezier(0, 0, 0.2, 1) 1s,
    opacity 0.7s cubic-bezier(0, 0, 0.2, 1) 1s;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0, 0, 0.2, 1) 1s,
    opacity 0.7s cubic-bezier(0, 0, 0.2, 1) 1s;

  @media (max-width: 768px) {
    color: red;
  }
`;

const DoubleLineHeader = ({ firstLine, secondLine }: Props) => (
  <DoubleLineHeaderStyle>
    {firstLine}
    <br />
    {secondLine}
  </DoubleLineHeaderStyle>
);

export default DoubleLineHeader;
