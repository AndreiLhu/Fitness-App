import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Link from 'next/link';
// import MobileNavbar from '@/components/MobileNavbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <MobileNavbar /> */}
      <h1>This is the index.js page</h1>
    </>
  );
}
