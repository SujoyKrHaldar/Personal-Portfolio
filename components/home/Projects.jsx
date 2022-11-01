import Img from "../tools/Img";
import ProjectCard from "../tools/ProjectCard";

const projects = [
  {
    id: "6",
    name: "Via Pontium",
    isComplete: false,
    about: "Service portfolio.",
    role: "Design and development.",
    links: [],
    coverPhoto: "/assets/viapontium-design.png",
  },
  {
    id: "5",
    name: "Normalized nerd",
    isComplete: false,
    about: "Personal portfolio",
    role: "Design and development.",
    links: [
      {
        id: "1",
        name: "Demo url",
        url: "https://normalizednerd.vercel.app",
      },
    ],
    coverPhoto: "/assets/normalizednerd-design.png",
  },

  {
    id: "1",
    name: "The localfeet",
    isComplete: true,
    about: "Personal travel blog.",
    role: "Design and development.",
    links: [
      {
        id: "1",
        name: "Live url",
        url: "https://thelocalfeet.com",
      },
    ],
    coverPhoto: "/assets/thelocalfeet-design.png",
  },
  {
    id: "2",
    name: "The Mindful life",
    isComplete: true,
    about: "Mental health and life-style.",
    role: "Design and development.",
    links: [
      {
        id: "1",
        name: "Live url",
        url: "https://mindfullife.in",
      },
    ],
    coverPhoto: "/assets/mindfullife-design.png",
  },
  {
    id: "3",
    name: "Aranya bake club",
    isComplete: true,
    about: "Local cake shop.",
    role: "Design and development.",
    links: [
      {
        id: "1",
        name: "Live url",
        url: "https://aranyabakeclub.in",
      },
    ],
    coverPhoto: "/assets/aranyabakeclub-design.png",
  },
  {
    id: "4",
    name: "Rang welfare foundation",
    isComplete: true,
    about: "A non-profit organisation.",
    role: "Design and development.",
    links: [
      {
        id: "1",
        name: "Live url",
        url: "https://rangwelfarefoundation.com",
      },
    ],
    coverPhoto: "/assets/rangwelfarefoundation-design.png",
  },
];

function Projects() {
  return (
    <section
      id="latest-projects"
      className="w-full h-full pt-32 pb-24 bg-gray-100 z-10"
    >
      <div className="absolute w-1/3 h-1/3 top-0 right-0 -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-gray-100 z-10"></div>
        <Img
          alt="landing pattern"
          src="/assets/pattern-1.svg"
          className="opacity-40"
        />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-gray-100 z-10"></div>
      </div>

      <div className="container">
        <div className="mb-8">
          <p className="tag">Projects</p>
          <h2 className="my-2">
            My <span className="font-bold">Latest Works</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((data) => (
            <ProjectCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
