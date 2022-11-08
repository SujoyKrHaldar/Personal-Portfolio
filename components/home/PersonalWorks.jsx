import Img from "../tools/Img";
import ProjectCard from "../tools/ProjectCard";

const projects = [
  {
    id: "4",
    name: "MovieDB",
    role: "API integration",
    isComplete: false,
    links: [
      {
        id: "1",
        name: "Live url",
        url: "https://next-movie-finder.vercel.app/",
      },
      {
        id: "2",
        name: "Source code",
        url: "https://github.com/SujoyKrHaldar/Next-Movie-App",
      },
    ],
    about: "A movie searching application using Next.js Serverside rendering.",
    coverPhoto: "/assets/moviedb-design.png",
  },

  {
    id: "6",
    name: "Cados-dev",
    role: "API integration",
    isComplete: true,
    links: [
      {
        id: "1",
        name: "Live url",
        url: "https://cados-dev.vercel.app/",
      },
      {
        id: "2",
        name: "Source code",
        url: "https://github.com/SujoyKrHaldar/Cados.dev",
      },
    ],
    about: "Collaboration site demo template with realtime API.",
    coverPhoto: "/assets/cados.dev-design.png",
  },

  {
    id: "1",
    name: "Hostinger Redesign",
    role: "Redesign and development",
    isComplete: true,
    links: [
      {
        id: "1",
        name: "Live url",
        url: "https://hostinger-redesign.vercel.app/",
      },
      {
        id: "2",
        name: "Source code",
        url: "https://github.com/SujoyKrHaldar/Hostinger-Redesign",
      },
    ],
    about: "UI redesign of Hostinger.in",
    coverPhoto: "/assets/hostinger-redesign.png",
  },
  {
    id: "2",
    name: "Online Education UI",
    role: "UI design and development",
    isComplete: true,
    links: [
      { id: "1", name: "Live url", url: "https://on-education.vercel.app/" },
      {
        id: "2",
        name: "Source code",
        url: "https://github.com/SujoyKrHaldar/Online-Education-UI",
      },
    ],
    about: "UI design of a E-learning site",
    coverPhoto: "/assets/online-education-design.png",
  },
  {
    id: "3",
    name: "My Portfolio",
    role: "Jamstack application",
    isComplete: true,
    links: [],
    about: "You already saw it.",
    coverPhoto: "/assets/myportfolio-design.png",
  },

  {
    id: "5",
    name: "CookRecipes",
    role: "API integration",
    isComplete: true,
    links: [
      {
        id: "1",
        name: "Live url",
        url: "https://react-recipe-finder-2022.netlify.app/",
      },
      {
        id: "2",
        name: "Source code",
        url: "https://github.com/SujoyKrHaldar/React-Recipe-App",
      },
    ],
    about:
      "A simple recipe finder application using tradional React.js and spoonacular Api.",
    coverPhoto: "/assets/cookrecipe-design.png",
  },
];

function PersonalWorks() {
  return (
    <section id="latest-projects" className="w-full h-full pt-32 pb-24 z-10">
      <div className="absolute w-1/3 h-1/3 top-0 left-0 -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white z-10"></div>
        <Img
          alt="landing pattern"
          src="/assets/pattern-1.svg"
          className="opacity-40"
        />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-l from-white z-10"></div>
      </div>

      <div className="absolute bg-gray-100 w-full h-1/4 bottom-0 left-0"></div>

      <div className="container">
        <div className="mb-8">
          <p className="tag">Hobby projects</p>
          <h2 className="my-2">
            My <span className="font-bold">Randam Projects</span>
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

export default PersonalWorks;
