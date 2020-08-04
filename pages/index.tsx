import Head from 'next/head';
import Link from 'next/link';

// color: ${({ theme }) => theme.colors.primary};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span>반갑습니다</span>
    </div>
  );
}
