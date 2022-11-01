import Link from "next/link";
import Img from "./Img";

function AchievementCard({ data }) {
  return (
    <div className="py-6 px-6 border border-black bg-white max-w-3xl">
      <p
        className={`p-1 px-4 w-fit  ${
          data.isComplete ? "bg-gray-200" : "bg-yellow-300"
        }
      mb-3 rounded-full text-xs font-bold`}
      >
        {data.topic}
      </p>
      <h3 className="font-bold">{data.title}</h3>
      <p>{data.task}</p>
      <p>
        <span className="font-bold">Host</span> :{" "}
        {data.hostUrl != "" ? (
          <Link href={data.hostUrl}>
            <a target="_blank" className="">
              {data.host}
            </a>
          </Link>
        ) : (
          <p>{data.host}</p>
        )}
      </p>
      <div className="flex flex-wrap gap-4 mt-4">
        {data.custom.map((details) => (
          <Link key={details.id} href={details.url}>
            <a
              target="_blank"
              className="font-bold md:hover:underline underline-offset-4"
            >
              {details.title}
            </a>
          </Link>
        ))}
      </div>
      {data.coverPhoto === "" ? (
        ""
      ) : (
        <div className="lg:group-hover:scale-105 duration-500 w-full h-[200px] lg:h-[300px] mt-8">
          <Img src={data.coverPhoto} alt={data.name} position={data.position} />
        </div>
      )}
    </div>
  );
}

export default AchievementCard;
