import { CiLight } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-4">
      <h1 className="text-gray-900 font-bold text-3xl">Tseki</h1>
      <div className="flex gap-7">
        <ul className="font-base flex text-gray-900 gap-6 text-xl">
          <li>About</li>
          <li>work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <div className="h-5 border border-gray-400"></div>
        <div className="flex items-center gap-4">
          <CiLight className="text-3xl" />
          <button className="bg-gray-900 text-white text-base rounded-xl px-3 py-[4px]">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
