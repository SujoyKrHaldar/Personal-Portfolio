import AchievementCard from "../tools/AchievementCard";
import Img from "../tools/Img";

const data = [
  {
    id: "1",
    topic: "Design and development",
    title: "Securing first place in Thapa Codefest 2",
    isComplete: true,
    task: "Primary task is to redesign and develop the Hostinger India's home page.",
    host: "Thapa Technical",
    hostUrl: "https://www.youtube.com/c/ThapaTechnical",
    custom: [
      {
        id: "3",
        url: "https://hostinger-redesign.vercel.app/",
        title: "Live url",
      },
      {
        id: "1",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:6985154347357671424/",
        title: "Linkedin Post",
      },
      {
        id: "2",
        url: "https://www.youtube.com/watch?v=z-jhfoOoVsg&t=1255s",
        title: "Winner Announcement",
      },
    ],
    coverPhoto: "/assets/thapacodefest-winner.png",
    position: "center",
  },

  {
    id: "2",
    topic: "Portfolio showcase",
    isComplete: true,
    title: "Securing third place in September Hackathon 🍁🍂 Portfolio Edition",
    task: "Task is to showcase best 'quality' portfolios.",
    host: "Dennis Ivanov",
    hostUrl: "https://dennisivy.com/",
    custom: [
      //   {
      //     id: "1",
      //     url: "https://www.linkedin.com/feed/update/urn:li:activity:6985154347357671424/",
      //     title: "Linkedin Post",
      //   },
      {
        id: "2",
        url: "https://www.youtube.com/watch?v=X2473En3h_o&t=5762s",
        title: "Winner Announcement",
      },
    ],
    coverPhoto: "/assets/portfolio-showcase.png",
    position: "top",
  },

  {
    id: "3",
    topic: "Collaboration - ongoing",
    isComplete: false,
    title: "Designing a Hackathon platform - codebattles.dev",
    task: "Task is to create a design template for the platform.",
    host: "Dennis Ivanov",
    hostUrl: "https://dennisivy.com/",
    custom: [
      {
        id: "2",
        url: "https://codebattles.dev/",
        title: "Checkout Codebattle.dev",
      },
    ],
    coverPhoto: "/assets/codebattle.png",
    position: "center",
  },
  {
    id: "4",
    topic: "Album designing",
    isComplete: true,
    title: "Designing a Bengali Music Album - 'Kumir Danga'",
    task: "Create the entire design for music album and all.",
    host: "Suvojit dey",
    hostUrl: "https://www.facebook.com/Suvojittdeyy",
    custom: [
      {
        id: "2",
        url: "https://youtu.be/xXGoZNmxcmA",
        title: "Album Release Ceremony",
      },
    ],
    coverPhoto: "/assets/kumirdanga-release.png",
    position: "center",
  },
];

function Achievements() {
  return (
    <section id="latest-projects" className="w-full h-full pt-32 pb-24 z-10">
      <div className="absolute w-1/3 h-1/3 top-0 right-0 -z-10">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-white z-10"></div>
        <Img
          alt="landing pattern"
          src="/assets/pattern-1.svg"
          className="opacity-40"
        />
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-white z-10"></div>
      </div>

      <div className="container">
        <div className="mb-8">
          <p className="tag">Small steps</p>
          <h2 className="my-2 font-bold">Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((data) => (
            <AchievementCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
