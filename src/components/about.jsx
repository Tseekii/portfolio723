import { HiHandRaised } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LiaCatSolid } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { LuFigma } from "react-icons/lu";

const About = () => {
  return (
    <div className="mx-20 flex">
      <div className="flex-1 bg-red-400">
        <div className="flex">
          <h1 className="text-6xl text-gray-900 "> Hi, I'm Tseki</h1>
          <HiHandRaised className="text-6xl text-yellow-500" />
        </div>

        <h6 className="text-base text-gray-600">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </h6>

        <div className="">
          <div className="flex items-center">
            <IoLocationOutline />
            <h5 className="text-base">Ulaanbaatar, Mongolia</h5>
          </div>
          <div className="flex items-center">
            <GoDotFill />
            <h5 className="text-base">Available for new projects</h5>
          </div>
        </div>

        <div className="flex">
          <LiaCatSolid />
          <FiTwitter />
          <LuFigma />
        </div>
      </div>
      <div className="flex-1 bg-slate-500">
        <img src="" alt="picture" />
      </div>
    </div>
  );
};

export default About;
