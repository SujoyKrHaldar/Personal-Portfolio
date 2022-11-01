import Link from "next/link";
import ArtCard from "../tools/ArtCard";

const art = [
  {
    id: "1",
    name: "gal gadot",
    url: "https://www.instagram.com/p/B6kPhqKJf-Q/",
    image: "/assets/galgadot.png",
  },
  {
    id: "2",
    name: "randam potrait",
    url: "https://www.instagram.com/p/CFPODxUjYcI/",
    image: "/assets/randampotrait.png",
  },
  {
    id: "3",
    name: "randam potrait 2",
    url: "https://www.instagram.com/p/CDdsgCUDjxQ/",
    image: "/assets/randampotrait-2.png",
  },
  {
    id: "4",
    name: "randam potrait 3",
    url: "https://www.instagram.com/p/CE6SyFYFH1r/",
    image: "/assets/randampotrait-3.png",
  },
];

function ArtWorks() {
  return (
    <section className="w-full h-full py-24">
      <div className="absolute bg-gray-100 w-full h-1/4 bottom-0 left-0"></div>
      <div className="container">
        <div className="mb-8 flex items-end gap-8 justify-between">
          <div className="space-y-2">
            <p className="tag">Other than tech</p>
            <h2>
              Some of my <span className="font-bold">Art Works</span>
            </h2>
          </div>

          <Link href="/art">
            <a className="font-bold">View all Arts</a>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {art.map((data) => (
            <ArtCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArtWorks;
