import Img from "../tools/Img";
import { CgIfDesign } from "react-icons/cg";
import { MdDraw } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

const stack = [
  {
    icon: <CgIfDesign />,
    name: "Designing",
    comment:
      "Design posters, thumbnails, web UI using Figma, photoshop, illustrator.",
  },
  {
    icon: <HiOutlineCode />,
    name: "Development",
    comment:
      "Html, css, Tailwind css, Javascript, React.js, Next.js, Node.js, Express.js, Rest api,",
  },
  {
    icon: <MdDraw />,
    name: "Art",
    comment:
      "Potrait arts. Graphite and Charcoal. Also interested in photography.",
  },
];
function About() {
  return (
    <section className="w-full h-full py-16 ">
      <div className="absolute bg-gray-100 top-0 right-0 h-full w-full xl:w-[90%]"></div>
      <div className="container h-full ">
        <div className="h-full flex items-center">
          <h1
            className="absolute inset-0 text-6xl 
          text-white font-black uppercase"
          >
            <span className="block">Art</span>
            <span className="block">Design</span>
            <span className="block">Development</span>
          </h1>

          <div className="hidden xl:block absolute w-full max-w-[450px] bottom-[-6rem] left-0">
            <Img
              alt="landing pattern"
              src="/assets/character.svg"
              layout="responsive"
              w={300}
              h={350}
            />
          </div>

          <div className="max-w-2xl xl:ml-auto">
            <p className="tag">About me</p>
            <h2 className="my-2">
              A small <span className="font-bold">Introduction</span>
            </h2>
            <p className=" mb-4">
              This is Sujoy Kumar Haldar, 2021 passout hold Computer science
              Engineering from Kalyani Government Engineering College, West
              Bengal, India. I have been passionate about UI/UX design and
              fullstack development since my early college days. Also I like
              spend my leisure time painting.
            </p>

            <p className="mb-4">
              Currently working in Capgemini as an Software analyst. But I am
              Still learning lot of things in design and development.
            </p>

            <p className="font-bold">What I like to do</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {stack.map((data) => (
                <div
                  key={data.name}
                  className="p-4 space-y-3 bg-white rounded-md"
                >
                  <div className="text-3xl p-2 bg-gray-200 rounded-md inline-block">
                    {data.icon}
                  </div>
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
