import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export function Carousel({ images }: { images: string[] }) {
  const DEFAULT_DELAY = 2000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delay, setDelay] = useState(DEFAULT_DELAY);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const startInterval = () => {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, delay);
    };

    startInterval();

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [images.length, delay]);

  const handleCircleClick = (index: number) => {
    setCurrentIndex(index);
    setDelay(DEFAULT_DELAY * 5);
    setIsClicked(true);

    setTimeout(() => {
      setDelay(DEFAULT_DELAY);
      setIsClicked(false);
    }, 2000);
  };

  return (
    <div className="w-full flex flex-col items-center md:gap-2">
      <div className="flex justify-between items-center gap-8 my-8 max-w-[75vw] md:max-w-[600px]">
        <FaArrowLeft
          onClick={() =>
            handleCircleClick(
              (currentIndex - 1 + images.length) % images.length
            )
          }
          className="hover:cursor-pointer hover:opacity-70  user-select-none"
          size={24}
        />
        <div className="flex items-center aspect-3/2 w-full">
          <img
            className="md:object-contain object-cover rounded-xl w-full"
            src={images[currentIndex]}
            alt={`Carousel Image ${currentIndex}`}
          />
        </div>
        <FaArrowRight
          onClick={() => handleCircleClick((currentIndex + 1) % images.length)}
          className="hover:cursor-pointer hover:opacity-70 user-select-none"
          size={24}
        />
      </div>
      <Indicators
        images={images}
        onClick={handleCircleClick}
        isClicked={isClicked}
        currentIndex={currentIndex}
      />
    </div>
  );
}

interface IndicatorsProps {
  images: string[];
  onClick: (index: number) => void;
  isClicked: boolean;
  currentIndex: number;
}

function Indicators({
  images,
  onClick,
  isClicked,
  currentIndex,
}: IndicatorsProps) {
  return (
    <div className="mt-4 flex gap-2">
      {images.map((_, index) => (
        <div
          onClick={() => onClick(index)}
          key={`carousel-indicator-${index}`}
          className={`hover:cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "bg-white/80"
              : `bg-white/20 hover:bg-emerald-50 ${
                  isClicked && index === currentIndex ? "bg-emerald-50" : ""
                }`
          }`}
        />
      ))}
    </div>
  );
}
