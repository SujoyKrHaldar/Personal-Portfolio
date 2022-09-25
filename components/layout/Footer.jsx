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
      <footer className="mt-auto py-8 bg-black-500 text-gray-200">
        <div className="container ">
          <div className="flex items-end justify-between gap-4 py-4">
            <div className="">
              <p className="text-sm">Something in mind</p>
              <h2 className="font-bold">Lets talk</h2>
            </div>
            <div className="space-y-1">
              <p className="text-sm">You can mail me</p>
              <a href="mailto:sujoykrhaldar@gmail.com">
                sujoykrhaldar@gmailcom
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-right">Can follow me on</p>
              <div className="flex items-center justify-end gap-2">
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
