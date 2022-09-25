import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const navList = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Works",
    url: "/projects",
  },
  {
    name: "Contact",
    url: "mailto:sujoykrhaldar@gmail.com",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100007678097852",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sujoykhaldar/",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sujoy-kumar-haldar-31713b1a4/",
  },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  const openMenu = () => {
    setOpen(true);
  };

  return (
    <>
      <header className="fixed bg-white md:bg-transparent md:absolute inset-0 w-full py-5 z-50 h-fit">
        <div className="container flex items-center justify-between gap-4">
          <Link href="/">
            <p className="handwritten text-3xl cursor-pointer">
              Sujoy Kr. Haldar
            </p>
          </Link>
          <nav className="flex items-center gap-8">
            {navList.map((link, id) => (
              <Link href={link.url} key={id}>
                <a
                  className={`hidden md:inline-block ${
                    router.pathname === link.url ? "font-black" : ""
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <div
              onClick={openMenu}
              className="md:hidden text-2xl cursor-pointer p-2 bg-black-500 text-white rounded-lg"
            >
              <CgMenuRight />
            </div>
          </nav>
        </div>
      </header>

      <section className="w-screen p-3 h-full fixed top-0 right-0 z-50 overflow-hidden pointer-events-none flex items-center justify-end">
        <div
          className={`flex-1 p-16 h-full max-w-[500px] bg-black-500 text-white
          flex items-center justify-start pointer-events-auto duration-300 
          ${
            isOpen
              ? " translate-x-0 opacity-100 duration-200"
              : " translate-x-full opacity-0 duration-200"
          }
        
          `}
        >
          <div
            onClick={() => setOpen(false)}
            className="absolute z-10 p-1 bg-black text-white rounded-lg top-5 right-5 cursor-pointer text-3xl"
          >
            <MdOutlineClose />
          </div>

          <div className="space-y-8 w-full">
            <div className="space-y-4">
              <p className="tag text-gray-500">Menu</p>
              {navList.map((link, id) => (
                <Link href={link.url} key={id}>
                  <a className="block text-4xl font-semibold">{link.name}</a>
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              <p className="tag text-gray-500">Follow</p>
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url}>
                  <a className="block text-2xl" target="_blank">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              <p className="tag text-gray-500">Mail me</p>
              <Link href="mailto:sujoykrhaldar@gmail.com">
                <a className="block text-2xl" target="_blank">
                  sujoykrhaldar@gmail.com
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
