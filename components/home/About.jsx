import Img from "../tools/Img";

const stack = [
  {
    name: "Designing",
    comment:
      "Design posters, thumbnails, web UI using Figma, photoshop, illustrator.",
  },
  {
    name: "Development",
    comment:
      "Html, css, Tailwind css, Javascript, React.js, Next.js, Node.js, Express.js, Rest api,",
  },
  {
    name: "Art",
    comment:
      "Potrait arts. Graphite and Charcoal. Also interested in photography and videography as well.",
  },
];
function About() {
  return (
    <section className="w-full h-full py-16 ">
      <div className="absolute bg-gray-100 top-0 right-0 h-full w-[90%]"></div>
      <div className="container h-full ">
        <div className="h-full flex items-center">
          <div className="absolute w-full max-w-[450px] bottom-[-6rem] left-0">
            <Img
              alt="landing pattern"
              src="/assets/character.svg"
              layout="responsive"
              w={300}
              h={350}
            />
          </div>
          <div className="max-w-2xl ml-auto">
            <p className="tag">About me</p>
            <h2 className="my-2">
              A small <span className="font-bold">Introduction</span>
            </h2>
            <p className=" mb-4">
              This is Sujoy Kumar Haldar, 2021 passout hold Computer science
              Engineering from Kalyani Government Engineering College. I have
              been passionate about UI/UX design and fullstack development since
              my early college days. Also I like spend my leisure time painting.
            </p>

            <p className="font-bold">What I like to do</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {stack.map((data) => (
                <div key={data.name} className="p-4 space-y-3 bg-white">
                  <p className="font-bold">{data.name}</p>
                  <p className="text-sm">{data.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
