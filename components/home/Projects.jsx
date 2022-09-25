import Link from "next/link";
import ProjectCard from "../tools/ProjectCard";

const projects = [
  {
    id: "1",
    name: "The localfeet",
    url: "https://thelocalfeet.com",
    status: "Complete",
    about: "Blog website with content management system.",
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
    <section className="w-full h-full py-16">
      <div className="container">
        <div className="mb-4">
          <p className="tag">Projects</p>
          <h2 className="my-2">
            My <span className="font-bold">Latest works</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((data) => (
            <ProjectCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
