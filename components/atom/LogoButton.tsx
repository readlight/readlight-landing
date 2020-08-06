import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = { targetPath: string };

const LogoButtonClickArea = styled.div`
  float: left;
`;

const LogoButton: React.FC<Props> = ({ targetPath }) => {
  return (
    <LogoButtonClickArea>
      <Link href={targetPath}>
        <img src="../../public/npmlogo.svg" alt="npmlogo" />
      </Link>
    </LogoButtonClickArea>
  );
};

export default LogoButton;
