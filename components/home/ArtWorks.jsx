import Img from "../tools/Img";

const imgUrl = [
  {
    id: "1",
    url: "",
  },
];

function ArtWorks() {
  return (
    <section className="w-full h-full py-24">
      <div className="absolute w-1/3 h-1/3 top-0 left-0 bg-white -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white z-10"></div>
        <Img
          alt="landing pattern"
          src="/assets/pattern-1.svg"
          className="opacity-50"
        />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
      </div>

      <div className="container">
        <div className="mb-8">
          <p className="tag">Hobby - Art</p>
          <h2 className="my-2">
            Some of my <span className="font-bold">Art Works</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ArtWorks;
