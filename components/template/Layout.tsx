import * as React from 'react';
import styled from 'styled-components';

type Props = { children: React.ReactNode; isBackgroundGray: boolean };

type HeightHandlerProps = {
  isBackgroundGray: boolean;
};

const HeightHandler = styled.div<HeightHandlerProps>`
  color: ${({ theme }) => theme.colors.header};
  height: 100vh;
  background-color: ${(props) =>
    props.isBackgroundGray
      ? ({ theme }) => theme.colors.lightGray
      : ({ theme }) => theme.colors.pureWhite};
  @media (max-width: 768px) {
    color: red;
  }
`;

const DoubleLineHeader = ({ children, isBackgroundGray }: Props) => (
  <HeightHandler isBackgroundGray={isBackgroundGray}>{children}</HeightHandler>
);

export default DoubleLineHeader;
