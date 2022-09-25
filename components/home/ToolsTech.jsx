const tools = [
  {
    title: "Design & Editing",
    tools: "Figma, Photoshop, Premiere pro",
  },
  {
    title: "Frontend Development",
    tools: "Html, Css, Scss, Tailwind css, Javascript, React.js, Next.js",
  },
  {
    title: "Backend Development",
    tools: "Node.js, Express.js, REST api",
  },
  {
    title: "Stack",
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
      {/* <div className="absolute bg-gray-100 top-0 right-0 h-full w-full xl:w-[90%]"></div> */}
      <div className="container h-full ">
        {/* <div className="hidden xl:block absolute w-full max-w-[450px] bottom-[-6rem] left-0">
            <Img
              alt="landing pattern"
              src="/assets/character.svg"
              layout="responsive"
              w={300}
              h={350}
            />
          </div> */}

        <p className="tag">Tools & tech</p>
        <h2 className="my-2">
          My <span className="font-bold">Personal favourite</span>
        </h2>
        <div className="flex justify-between flex-wrap gap-4 mt-8">
          {tools.map((data) => (
            <div key={data.title} className="flex-1 p-6 bg-gray-100 space-y-3">
              <p className="font-black leading-6">{data.title}</p>
              <p className="text-sm">{data.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsTech;
