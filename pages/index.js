import Head from "next/head";
import Landing from "../components/home/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello and welcome - Sujoy kr haldar</title>
        <meta
          name="description"
          content="Hi, I am Sujoy Kr haldar. I design and build beautiful websites for businesses. 
          If you need a modern and powerful website, send me an email. If we are a good fit, I will 
          give you a time and cost estimate."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
    </>
  );
}
