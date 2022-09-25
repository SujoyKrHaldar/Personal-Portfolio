import Link from "next/link";
import Img from "./Img";

function ProjectCard({ data }) {
  return (
    <div className="bg-gray-100 overflow-hidden ">
      <div className="absolute w-1/3 h-full inset-0 bg-gray-200"></div>
      <div className="space-y-2 p-8">
        {/* <p className="tag">{data.role}</p> */}
        <p className="font-bold text-2xl uppercase">{data.name}</p>
        {/* <div key={data.name} className="flex items-center gap-2">
          {data.stack.map((data) => (
            <p className="text-xs rounded-md py-1 px-2 bg-white">{data.name}</p>
          ))}
        </div> */}
        <p className="text-base">{data.about}</p>

        <Link href={data.url}>
          <a target="_blank" className="text-sm font-bold">
            Visit website
          </a>
        </Link>
      </div>
      <div className="mt-0 w-auto max-w-[430px] mx-auto bg-gray-100">
        <Img src={data.coverPhoto} alt={data.name} layout="responsive" w={430} h={230} />
      </div>
    </div>
  );
}

export default ProjectCard;
