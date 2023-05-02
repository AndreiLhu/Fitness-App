import MobileNavbar from '@/components/MobileNavbar';
import '../styles/style.css';
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
