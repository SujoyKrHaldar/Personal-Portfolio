import Link from "next/link";

const projects = [
  {
    id: "1",
    name: "The localfeet",
    url: "https://thelocalfeet.com",
    status: "Complete",
    about: "Blog website with content management system.",
    role: "Design and development.",
    stack: "Next.js, Scss, Sanity",
    coverPhoto: "",
  },
  {
    id: "2",
    name: "The Mindful life",
    url: "https://mindfullife.in",
    status: "Complete",
    about: "Mental health and life-style.",
    role: "Design and development.",
    stack: "Next.js, Scss, Sanity",
    coverPhoto: "",
  },
  {
    id: "3",
    name: "Aranya bake club",
    url: "https://aranyabakeclub.in",
    status: "Complete",
    about: "Local cake shop.",
    role: "Design and development.",
    stack: "Next.js, Tailwind css, Sanity",
    coverPhoto: "",
  },
  {
    id: "4",
    name: "Rang welfare foundation",
    url: "https://rangwelfarefoundation.com",
    status: "Complete",
    about: "A non-profit organisation.",
    role: "Design and development.",
    stack: "Next.js, Strapi",
    coverPhoto: "",
  },
];

function Projects() {
  return (
    <section className="w-full h-full py-16">
      <div className="container">
        <div className="max-w-3xl">
          <p className="tag">Projects</p>
          <h2>My latest works</h2>
        </div>
        <div className="">
          {projects.map((data) => (
            <div key={data.id} className="">
              <h2>{data.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
