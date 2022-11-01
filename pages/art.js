import Head from "next/head";
import ArtCard from "../components/tools/ArtCard";

const artworks = [
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
  {
    id: "5",
    name: "madhuri",
    url: "https://www.instagram.com/p/CCn8q9DjrL_/",
    image: "/assets/madhuri.png",
  },
  {
    id: "6",
    name: "animal",
    url: "https://www.instagram.com/p/CCn8q9DjrL_/",
    image: "/assets/animal.png",
  },
  {
    id: "7",
    name: "jacksparow",
    url: "https://www.instagram.com/p/BzfE-NlHg95/",
    image: "/assets/jacksparow.png",
  },
  {
    id: "8",
    name: "leomessi",
    url: "https://www.instagram.com/p/BkqBI5TFZEn/",
    image: "/assets/leomessi.png",
  },
];

function art() {
  return (
    <>
      <Head>
        <title> My Art works.</title>
        <meta name="description" content="Check out my art works." />
      </Head>

      <section className="w-full h-full pt-32 pb-24">
        <div className="absolute bg-gray-100 w-full h-1/4 bottom-0 left-0"></div>
        <div className="container">
          <div className="mb-8">
            <p className="tag mb-2">Beyond tech</p>
            <h2>
              My <span className="font-bold">Art Works</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4">
            {artworks.map((data) => (
              <ArtCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default art;
