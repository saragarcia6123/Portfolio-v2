import { FaLocationDot } from "react-icons/fa6";
import ProfilePicture from "/pfp.png";
import SocialsTop from "./SocialsTop";

export default function InfoCard() {
  return (
    <div className="box-border flex flex-col md:flex-row gap-8 justify-center md:pl-8 mb-2 md:mt-12 mt-24">
      <div className="flex md:flex-row flex-col items-center gap-10 justify-center">
        <div className="aspect-square flex justify-center w-32 min-w-[140px] rounded-full">
          <img
            src={ProfilePicture}
            alt="Closeup portrait of me"
            className="sepia-[25%] border-white border-2 rounded-full"
          />
        </div>
        <div className="flex flex-col md:h-full justify-center text-center md:text-start">
          <h3 className="text-3xl mb-1 tracking-widest">SARA GARCIA</h3>
          <p className="text-xl uppercase tracking-wider">
            Software Engineer
          </p>
          <div className="flex gap-4 mt-1 text-base justify-center md:justify-start">
            <div className="flex items-center gap-2 tracking-wide">
              <FaLocationDot className="size-4 opacity-90" />
              <p>Lancaster, UK</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden mb-8">
        <SocialsTop />
      </div>
    </div>
  );
}
