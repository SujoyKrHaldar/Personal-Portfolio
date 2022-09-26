import Link from "next/link";
import Img from "../tools/Img";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { CgArrowsScrollV } from "react-icons/cg";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100007678097852",
    icon: <AiFillFacebook />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sujoykhaldar/",
    icon: <AiFillInstagram />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sujoy-kumar-haldar-31713b1a4/",
    icon: <AiFillLinkedin />,
  },
  {
    name: "Github",
    url: "https://github.com/SujoyKrHaldar",
    icon: <AiFillGithub />,
  },
];

function Landing() {
  return (
    <>
      <section className="w-full h-screen py-16">
        <div
          className="overflow-hidden  absolute w-full sm:w-1/3
        h-full top-0 right-0 bg-white -z-10"
        >
          <div
            className=" block sm:hidden absolute inset-0 w-full h-[70%]
          bg-gradient-to-b from-white z-10"
          ></div>
          <Img
            alt="landing pattern"
            src="/assets/pattern-1.svg"
            className="opacity-30"
          />
        </div>

        <div className="container h-full">
          <div className="h-full flex items-end sm:items-center ">
            <div className="max-w-3xl mb-8 sm:mb-0">
              <p className="tag">Hello and welcome</p>
              <h1
                className="
             my-2 text-black-500"
              >
                I’m Sujoy,{" "}
                <span className="block sm:inline">
                  <span className="font-bold">UI Designer</span> and{" "}
                  <span className="font-bold">Web Developer.</span>
                </span>
              </h1>
              <p className="max-w-lg mb-8">
                I design and build beautiful websites. If you need a modern and
                powerful website, send me an email. If we are a good fit, I will
                give you a time and cost estimate.
              </p>
              <div className="flex gap-3">
                <Link href="#latest-projects">
                  <a className="bg-black-500 rounded-xl lg:rounded-lg text-white inline-block py-5 px-9 lg:py-3 lg:px-7">
                    See my works
                  </a>
                </Link>

                <Link href="/Resume_sujoyKrHaldar.pdf">
                  <a
                    target="_blank"
                    className="bg-white rounded-xl lg:rounded-lg sm:bg-gray-200 inline-block py-5 px-9 lg:py-3 lg:px-7 font-bold"
                  >
                    My Resume
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              <div className="text-3xl">
                <CgArrowsScrollV />
              </div>
              <p className="text-base">Keep Scroll</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <p className="font-black text-base pr-4">Can follow me on</p>
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url}>
                  <a className="text-3xl" target="_blank">
                    {link.icon}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
