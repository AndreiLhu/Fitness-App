import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'] });
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

  div[id='iconContainer'] {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;
    padding: 32px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
  a {
    margin: 0 16px;
  }
  h1 {
    padding-bottom: 8em;
  }
`;

export default function Home() {
  return (
    <>
      <Container>
        <h1>Fitness App!</h1>
        <div id="iconContainer">
          <Link className="white" href={'/exercises'}>
            <Image
              src="/exercises.svg"
              alt="exercises"
              width="100"
              height="100"
            />
          </Link>
          <Link className="white" href={'/recipe'}>
            <Image src="/recipe.svg" alt="recipes" width="100" height="100" />
          </Link>
          <Link className="white" href={'/calculator'}>
            <Image
              src="/calculator.svg"
              alt="calculator"
              width="100"
              height="100"
            />
          </Link>
        </div>
      </Container>
    </>
  );
}
