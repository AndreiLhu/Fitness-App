import MobileNavbar from '@/components/MobileNavbar';

function App({ Component, pageProps }) {
  return (
    <>
      {' '}
      <MobileNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
