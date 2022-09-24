import Link from "next/link";
import Img from "../tools/Img";

function Landing() {
  return (
    <>
      <section className="w-full h-screen py-16">
        <div className="absolute w-1/3 h-full top-0 right-0 bg-white">
          <Img alt="landing pattern" src="/assets/pattern-1.svg" className="opacity-50"/>
        </div>
        <div className="container h-full flex items-center ">
          <div className="max-w-3xl">
            <p className="tag">Hello and welcome</p>
            <h1 className="my-2 text-black-500">
              I’m Sujoy, <span className="font-bold">UI Designer</span> and{" "}
              <span className="font-bold">Web Developer.</span>
            </h1>
            <p className="max-w-lg mb-8">
              I design and build beautiful websites for businesses. If you need
              a modern and powerful website, send me an email. If we are a good
              fit, I will give you a time and cost estimate.
            </p>
            <Link href="/">
              <a className="bg-black-500 rounded-lg text-white inline-block py-3 px-7">
                See my works
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
