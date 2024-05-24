import { useState } from "react";
import ArrowBack from "../assets/icons/arrow_back.svg";
import ArrowForward from "../assets/icons/arrow_forward.svg";
import Stars from "../assets/icons/star.svg";

interface CarouselProps {
  slides: Slide[];
}

interface Slide {
  src: string;
  text: string;
  name: string;
  country: string;
}

function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  function previousSlide() {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  function NextSlide() {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="relative h-[400px] max-w-[400px] overflow-hidden rounded-2xl">
      <div
        className="flex transition duration-300 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="mi-h-fit relative flex h-full w-full flex-shrink-0"
          >
            <img
              src={slide.src}
              alt={`slidesShow imgae ${index}`}
              className="min-h-[400px] object-cover"
            />
            <div className="absolute left-0 top-44 flex h-96 w-full flex-col gap-2 bg-gray-800/[0.6] p-4 text-white lg:gap-4">
              <p>{slide.text}</p>
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">{slide.name}</h1>
                <div className="hidden lg:flex">
                  <img src={Stars} alt="" className="h-5 w-5 " />
                  <img src={Stars} alt="" className="h-5 w-5 " />
                  <img src={Stars} alt="" className="h-5 w-5 " />
                  <img src={Stars} alt="" className="h-5 w-5 " />
                  <img src={Stars} alt="" className="h-5 w-5 " />
                </div>
              </div>
              <h2>{slide.country}</h2>
            </div>
          </div>
        ))}
      </div>
      <img
        onClick={previousSlide}
        className="absolute bottom-5 right-16 h-7 w-7 rounded-full border p-1 hover:cursor-pointer"
        src={ArrowBack}
        alt="prevSlideBTn"
      />
      <img
        onClick={NextSlide}
        className="absolute bottom-5 right-5 h-7 w-7 rounded-full border p-1 hover:cursor-pointer"
        src={ArrowForward}
        alt="nextSlideBTn"
      />
    </div>
  );
}

export default Carousel;
