import Head from "next/head";
import Link from "next/link";
import Img from "../components/tools/Img";

function pageNotFound() {
  return (
    <>
      <Head>
        <title> Oh! Page not found</title>
        <meta name="description" content="Page not found - Go back" />
      </Head>

      <section className="w-full h-screen py-16">
        <div className=" absolute w-full sm:w-1/3 h-full top-0 right-0 bg-white -z-10">
          <div className=" block sm:hidden absolute inset-0 w-full h-full bg-gradient-to-b from-white z-10"></div>
          <Img
            alt="landing pattern"
            src="/assets/pattern-1.svg"
            className="opacity-50"
          />
        </div>

        <div className="container h-full">
          <div className="h-full flex items-end sm:items-center ">
            <div className="max-w-3xl mb-8 sm:mb-0">
              <p className="tag">404</p>
              <h1 className="my-2 text-black-500 font-black">Page not found</h1>
              <p className="max-w-lg mb-8">
                The page you are looking is not there.
              </p>
              <div className="flex gap-3">
                <Link href="/">
                  <a className="bg-black-500 rounded-lg text-white inline-block py-3 px-7">
                    Go home
                  </a>
                </Link>
                <Link href="/projects">
                  <a className="bg-gray-100 rounded-lg inline-block py-3 px-7 font-bold">
                    See my Works
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default pageNotFound;
