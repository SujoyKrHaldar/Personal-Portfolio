const tools = [
  {
    title: "Frontend Development",
    tools: "Html, Css, Scss, Tailwind css, Javascript, React.js, Next.js",
  },
  {
    title: "Backend Development",
    tools: "Node.js, Express.js, REST api",
  },
  {
    title: "Design & Editing",
    tools: "Figma, Photoshop, Premiere Pro",
  },
  {
    title: "Tech Stack",
    tools: "MERN Stack, JAM Stack",
  },
  {
    title: "Headless CMS",
    tools: "Sanity, Strapi, Contentful",
  },
];

function ToolsTech() {
  return (
    <section className="w-full h-full py-16 ">
      <div className="container h-full ">
        <p className="tag">Tools & tech</p>
        <h2 className="my-2">
          My <span className="font-bold">Personal Favourite</span>
        </h2>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((data) => (
            <div
              key={data.title}
              className="p-6 space-y-2 rounded-md bg-gray-100"
            >
              <p className="font-black leading-6 ">{data.title}</p>
              <p className="text-sm block ">{data.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsTech;
