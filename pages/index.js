import Head from "next/head";
import About from "../components/home/About";
import ArtWorks from "../components/home/ArtWorks";
import Landing from "../components/home/Landing";
import Projects from "../components/home/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title> Its Sujoy kr haldar, Welcome on-board.</title>
        <meta
          name="description"
          content="Hi, I am Sujoy Kr haldar. I design and build beautiful websites. 
          If you need a modern and powerful website, send me an email. If we are a good fit, I will 
          give you a time and cost estimate."
        />
      </Head>

      <Landing />
      <About />
      <Projects />
      {/* <ArtWorks /> */}
    </>
  );
}
