import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const navList = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Works",
    url: "/projects",
  },
];

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  return (
    <>
      <header className="absolute inset-0 w-full py-5 z-50 h-fit">
        <div className="container flex items-center justify-between gap-4">
          <Link href="/">
            <p className="handwritten text-3xl cursor-pointer">
              Sujoy Kr. Haldar
            </p>
          </Link>
          <nav className="flex items-center gap-8">
            {navList.map((link, id) => (
              <Link href={link.url} key={id}>
                <a className="hidden md:inline-block">{link.name}</a>
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
          className={`flex-1 p-16 h-full max-w-[460px] bg-black-500 text-white
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

          <div className="space-y-3 w-full">
            <p className="tag text-gray-500">Menu</p>
            {navList.map((link, id) => (
              <Link href={link.url} key={id}>
                <a className="block text-2xl font-semibold">{link.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
