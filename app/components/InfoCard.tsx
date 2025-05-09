import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ProfilePicture from "./../res/pfp.png";

export default function InfoCard() {
  return (
    <div className="flex justify-center items-center gap-12 py-6 px-10 bg-[rgba(255,255,255,0.1)] rounded-xl">
      <div className="aspect-square size-42">
        <img
          src={ProfilePicture}
          className="aspect-square rounded-full grayscale-[15%]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3>SARA GARCIA</h3>
        <p>Full Stack Software Developer</p>
        <p className="text-xs">4+ Years Personal Coding experience</p>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-2">
            <FaHome />
            <p>UK</p>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="size-3.5" />
            <p>Spain</p>
          </div>
        </div>
      </div>
    </div>
  );
}
