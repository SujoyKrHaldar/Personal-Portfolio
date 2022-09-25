import Link from "next/link";
import Img from "./Img";

function ProjectCard({ data }) {
  return (
    <div className="overflow-hidden p-4 bg-white border border-black-500">
      <div className="mt-0 w-auto mx-auto bg-gray-100">
        <Img
          src={data.coverPhoto}
          alt={data.name}
          layout="responsive"
          w={430}
          h={230}
        />
      </div>
      <div className="py-4">
        <p className="text-sm">{data.role}</p>
        <p className="font-bold text-xl my-1">{data.name}</p>
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
