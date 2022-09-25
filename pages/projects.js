import Head from "next/head";
import Projects from "../components/home/Projects";

function works() {
  return (
    <>
      <Head>
        <title>My works</title>
        <meta name="description" content="My featured projects." />
      </Head>

      <Projects />
    </>
  );
}

export default works;
