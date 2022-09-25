import Link from "next/link";
import Img from "./Img";

function ProjectCard({ data }) {
  return (
    <div className="bg-gray-100 border border-gray-200">
      <div className="space-y-2 p-6">
        <p className="tag">{data.role}</p>
        <p className="font-bold text-3xl">{data.name}</p>
        <div key={data.name} className="flex items-center gap-2">
          {data.stack.map((data) => (
            <p className="text-xs rounded-md py-1 px-2 bg-white">
              {data.name}
            </p>
          ))}
        </div>
        <p className="text-base">{data.about}</p>

        <Link href={data.url}>
          <a target="_blank" className="text-sm font-bold">Visit website</a>
        </Link>
      </div>
      <div className=" mx-6 w-auto h-[250px] bg-gray-100">
        <Img src={data.coverPhoto} alt={data.name} />
      </div>
    </div>
  );
}

export default ProjectCard;
