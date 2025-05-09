import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ProfilePicture from "./../res/pfp.png";
import Mountain from "./../res/mountain.png";

export default function InfoCard() {
  return (
    <div className="h-48 flex gap-12 justify-center flex-wrap">
      <div className="flex items-center gap-10">
        <div className="aspect-square size-42">
          <img
            src={ProfilePicture}
            className="aspect-square rounded-full grayscale-[25%] border-2 border-white/80"
          />
        </div>
        <div className="flex flex-col h-full justify-center">
          <h3 className="text-4xl mb-2 tracking-widest">SARA GARCIA</h3>
          <p className="text-xl uppercase tracking-wider">
            Full Stack Developer & Data Engineer
          </p>
          <p className="text-sm my-2 italic tracking-wide uppercase">
            4+ Yrs personal experience delivering Applications
          </p>
          <div className="flex gap-4 mt-1 text-base font-light">
            <div className="flex items-center gap-2">
              <FaHome className="opacity-90" />
              <p>UK</p>
            </div>
            <div className="flex items-center gap-2 uppercase">
              <FaLocationDot className="size-4 opacity-90" />
              <p>Spain</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end mb-4 gap-4">
        <img src={Mountain} className="h-32" />
        <p className="italic pr-2 text-s">
          Full-stack, data-driven solutions for all your business needs.
        </p>
      </div>
    </div>
  );
}
