import Link from "next/link";
import Img from "./Img";
import { AiFillInstagram } from "react-icons/ai";

function ArtCard({ data }) {
  return (
    <Link href={data.url}>
      <a
        target="_blank"
        className="group overflow-hidden w-full h-auto 
            border border-black bg-white p-2"
      >
        <div className="w-full h-[400px] md:h-[360px] bg-black ">
          <Img
            src={data.image}
            alt={data.name}
            className="lg:group-hover:opacity-50 duration-150"
          />
        </div>

        <div
          className="text-white text-3xl 
                absolute bottom-4 left-4 
                 lg:opacity-0 lg:group-hover:opacity-100"
        >
          <AiFillInstagram />{" "}
        </div>
      </a>
    </Link>
  );
}

export default ArtCard;
