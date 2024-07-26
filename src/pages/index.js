import Header from "@/components/header";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import Upwork from "@/components/upwork";

const experinceData = [
  {
    imgSrc: "src",
    title: "Sr. Frontend Developer",
    date: "Nov 2021 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: "./image/upwork.png",
    title: "Tech Lead",
    date: "Nov 2021 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: "./image/profile.jpg",
    title: "Junior",
    date: "Nov 2021 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      <About />
      <Experience />
      <Skill />
      {experinceData.map((experience) => {
        console.log("experience", experience);
        return (
          <Upwork
            title={experience.title}
            date={experience.date}
            image={experience.imgSrc}
          />
        );
      })}
      {/* <Upwork title="Junior" date="2018-09-10" />
      <Upwork title="Senior" date="201-09-10" /> */}
    </div>
  );
}
