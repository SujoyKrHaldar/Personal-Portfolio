import Link from "next/link";

function Landing() {
  return (
    <>
      <section className="w-full h-screen py-16">
        <div className="absolute w-full h-full inset-0 border-[1rem] border-white bg-gray-100"></div>
        <div className="container h-full flex items-center ">
          <div className="max-w-3xl">
            <p className="tag">Hello and welcome</p>
            <h1 className="my-2">
              I’m Sujoy, <span className="font-bold">UI Designer</span>{" "}
              and <span className="font-bold">Web Developer.</span>
            </h1>
            <p className="max-w-lg mb-8">
              I design and build beautiful websites for businesses. If you need
              a modern and powerful website, send me an email. If we are a good
              fit, I will give you a time and cost estimate.
            </p>
            <Link href="/">
              <a className="bg-black text-white inline-block py-3 px-7">
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
