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

function About() {
  return (
    <section className="w-full h-full py-16">
      <div className="container h-full flex items-center ">
        <div className="max-w-2xl">
          <p className="tag">About me</p>
          <h2 className="my-2">
            A small <span className="font-bold">Introduction</span>
          </h2>
          <p className=" mb-4">
            This is Sujoy Kumar Haldar, 2021 passout hold Computer science
            Engineering from Kalyani Government Engineering College. I have been
            passionate about UI/UX design and fullstack development since my
            early college days. Also I like spend my leisure time painting.
          </p>
          <div className="space-y-2">
            <p className="font-black">Follow me</p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url}>
                  <a className="text-4xl" target="_blank">
                    {link.icon}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
