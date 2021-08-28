import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Navbar from "./Navbar";
import Footer from './Footer';

Router.onRouteChangeStart = (url) => {
  console.log(url)
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

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
