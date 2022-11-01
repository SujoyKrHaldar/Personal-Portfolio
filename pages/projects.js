import Head from "next/head";
import PersonalWorks from "../components/home/PersonalWorks";
import Projects from "../components/home/Projects";

function works() {
  return (
    <>
      <Head>
        <title>My all projects.</title>
        <meta name="description" content="My featured projects." />
      </Head>

      <Projects />
      <PersonalWorks />
    </>
  );
}

export default works;
