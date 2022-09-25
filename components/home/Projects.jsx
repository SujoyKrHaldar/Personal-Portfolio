import Img from "../tools/Img";
import ProjectCard from "../tools/ProjectCard";

const projects = [
  {
    id: "1",
    name: "The localfeet",
    url: "https://thelocalfeet.com",
    status: "Complete",
    about: "Personal travel blog.",
    role: "Design and development.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "SCSS",
      },
      {
        name: "Sanity",
      },
    ],
    coverPhoto: "/assets/thelocalfeet.png",
  },
  {
    id: "2",
    name: "The Mindful life",
    url: "https://mindfullife.in",
    status: "Complete",
    about: "Mental health and life-style.",
    role: "Design and development.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "SCSS",
      },
      {
        name: "Sanity",
      },
    ],
    coverPhoto: "/assets/mindfullife.png",
  },
  {
    id: "3",
    name: "Aranya bake club",
    url: "https://aranyabakeclub.in",
    status: "Complete",
    about: "Local cake shop.",
    role: "Design and development.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind css",
      },
      {
        name: "Sanity",
      },
    ],
    coverPhoto: "/assets/aranyabakeclub.png",
  },
  {
    id: "4",
    name: "Rang welfare foundation",
    url: "https://rangwelfarefoundation.com",
    status: "Complete",
    about: "A non-profit organisation.",
    role: "Design and development.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Strapi",
      },
    ],
    coverPhoto: "/assets/rangwelfarefoundation.png",
  },
];

function Projects() {
  return (
    <section
      id="latest-projects"
      className="w-full h-full py-32 bg-gray-100 z-10"
    >
      <div className="absolute w-1/3 h-1/3 top-0 right-0 -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-gray-100 z-10"></div>
        <Img alt="landing pattern" src="/assets/pattern-1.svg" />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-gray-100 z-10"></div>
      </div>

      <div className="container">
        <div className="mb-8">
          <p className="tag">Projects</p>
          <h2 className="my-2">
            My <span className="font-bold">Latest Works</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {projects.map((data) => (
            <ProjectCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
