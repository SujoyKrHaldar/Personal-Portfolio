import Head from "next/head";
import Layout from "../components/layout/Layout";
import PageTransition from "../components/tools/PageTransition";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTransition>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageTransition>
    </>
  );
}

export default MyApp;
