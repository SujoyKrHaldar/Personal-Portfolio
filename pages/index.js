import Head from "next/head";
import About from "../components/home/About";
import Achievements from "../components/home/Achievements";
import ArtWorks from "../components/home/ArtWorks";
import Landing from "../components/home/Landing";
import PersonalWorks from "../components/home/PersonalWorks";
import Projects from "../components/home/Projects";
import ToolsTech from "../components/home/ToolsTech";

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
      <ToolsTech />
      <Projects />
      <PersonalWorks />
      <Achievements />
      <ArtWorks />
    </>
  );
}
