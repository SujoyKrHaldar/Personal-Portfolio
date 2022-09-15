import Link from "next/link";

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
  return (
    <>
      <header className="absolute inset-0 w-full py-8 z-10 h-fit">
        <div className="container flex items-center justify-between gap-4">
          <Link href="/">
            <p className="font-bold">Sujoy Kr. Haldar</p>
          </Link>
          <nav className="flex items-center gap-8">
            {navList.map((link, id) => (
              <Link href={link.url} key={id}>
                <a>{link.name}</a>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
