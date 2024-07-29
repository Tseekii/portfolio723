import { HiHandRaised } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LiaCatSolid } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { LuFigma } from "react-icons/lu";

const About = () => {
  return (
    <div className="mx-20 flex gap-8 mt-20">
      <div className="w-1/2 mt-3">
        <div className="max-w-[700px]">
          <h1 className="text-6xl text-gray-900 "> Hi, I'm Tseki ✋</h1>

          <h6 className="text-base text-gray-600 mt-10">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </h6>

          <div className="mt-10">
            <div className="flex items-center">
              <IoLocationOutline />
              <h5 className="text-base">Ulaanbaatar, Mongolia</h5>
            </div>
            <div className="flex items-center">
              <GoDotFill />
              <h5 className="text-base">Available for new projects</h5>
            </div>
          </div>

          <div className="flex mt-20">
            <LiaCatSolid />
            <FiTwitter />
            <LuFigma />
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="w-[280px] h-[320px] relative m-auto">
          <div className="w-[280px] h-[320px] bg-gray-400 border-solid-[0px] absolute -z-10 -right-5 -bottom-5"></div>
          <img
            src="./image/profile.jpg"
            alt="picture"
            className="w-[280px] h-[320px] border-solid border-8 border-white "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
