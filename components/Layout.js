import Head from 'next/head';
import Navbar from "./Navbar";
import Footer from './Footer';

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
          <title>{page}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page={page}/>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
