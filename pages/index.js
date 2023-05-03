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
  height: 50vh;
  @media only screen and (min-width: 768px) {
     {
      height: 100vh;
    }
  }

  div[id='iconContainer'] {
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin-top: 55vh;
  }

  img[id='mainImage'] {
    position: relative;
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 768px) {
    img[id='mainImage'] {
      position: relative;
      width: 60%;
      height: auto;
      margin-top: 5vh;
    }
  }
  h1 {
    position: relative;
  }
  a {
    margin: 0 16px;
    border-radius: 8px;
    background-color: rgba(142, 142, 142, 0.4);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: rgba(243, 243, 243, 1);
    }
  }
`;

export default function Home() {
  return (
    <>
      <Container>
        <h1>Fitness App!</h1>
        <Image
          src="/main.jpg"
          alt="main"
          id="mainImage"
          width="700"
          height="400"
        />
        <div id="iconContainer">
          <Link className="white" href={'/exercises'}>
            <Image
              src="/exercises.svg"
              alt="exercises"
              width="60"
              height="60"
            />
          </Link>
          <Link className="white" href={'/recipe'}>
            <Image src="/recipe.svg" alt="recipes" width="60" height="60" />
          </Link>
          <Link className="white" href={'/calculator'}>
            <Image
              src="/calculator.svg"
              alt="calculator"
              width="60"
              height="60"
            />
          </Link>
        </div>
      </Container>
    </>
  );
}
