import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

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
];

function Footer() {
  return (
    <>
      <footer className="mt-auto">
        <div className="absolute w-full h-1/3 inset-0 bg-gray-100"></div>
        <div className="py-6">
          <div className="absolute w-[90%] h-full top-0 right-0 bg-black-500"></div>

          <div className="container flex items-end justify-between gap-4 py-4 text-white">
            <div className="">
              <p className="text-sm">Something in mind</p>
              <h2 className="font-bold">Lets talk</h2>
            </div>
            <div className="space-y-1">
              <p className="text-base font-bold">Drop a mail</p>
              <a
                href="mailto:sujoykrhaldar@gmail.com"
                className="text-sm hover:underline"
              >
                sujoykrhaldar@gmailcom
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-base text-right font-bold">Can follow me on</p>
              <div className="flex items-center justify-end gap-2">
                {socialLinks.map((link) => (
                  <Link key={link.name} href={link.url}>
                    <a className="text-2xl" target="_blank">
                      {link.icon}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="flex items-center justify-between gap-4 py-4">
            <p className="text-sm">Copyright 2022 - All rights reserved.</p>
            <p className="text-sm">Designed in Figma, Developed in Next.js</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
