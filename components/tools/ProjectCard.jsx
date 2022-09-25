import Link from "next/link";
import Img from "./Img";

function ProjectCard({ data }) {
  return (
    <div className="group overflow-hidden w-full h-[420px] border-2 border-black bg-white flex items-end">
      <div className="group-hover:scale-105 duration-500 absolute w-full h-full mx-auto">
        <Img src={data.coverPhoto} alt={data.name} />
      </div>
      <p className="absolute top-4 left-4 p-1 px-4 bg-white rounded-full text-xs font-bold">{data.role}</p>
      <div className="p-6 w-full bg-gradient-to-r from-white via-white">
        <p className="font-black text-2xl my-1">{data.name}</p>
        <p className="text-sm mb-4">{data.about}</p>
        <Link href={data.url}>
          <a target="_blank" className="text-sm font-bold">
            Visit website
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
