import type { MetaFunction } from "@remix-run/node";
import gallery1 from "../assets/images/gallery1.jpeg";
import gallery2 from "../assets/images/gallery2.jpeg";
import gallery3 from "../assets/images/gallery3.jpeg";
import gallery4 from "../assets/images/gallery4.jpeg";
import gallery5 from "../assets/images/gallery5.jpeg";
import gallery6 from "../assets/images/gallery6.jpeg";
import gallery7 from "../assets/images/gallery7.jpeg";
import gallery8 from "../assets/images/gallery8.jpeg";
import gallery9 from "../assets/images/gallery9.jpeg";
import gallery10 from "../assets/images/gallery10.jpeg";
import gallery11 from "../assets/images/gallery11.jpeg";
import gallery12 from "../assets/images/gallery12.jpeg";
import gallery13 from "../assets/images/gallery13.jpeg";
import gallery14 from "../assets/images/gallery14.jpeg";
import gallery15 from "../assets/images/gallery15.jpeg";
import gallery16 from "../assets/images/gallery16.jpeg";
import { useEffect, useRef, useState } from "react";
import songFile from "../assets/audio/up_on_the_roof.mp3";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircle } from "react-icons/io5";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export default function Galleria() {
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => {
        const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
        setCurrentSlide(index);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="flex flex-col items-center gap-1 md:gap-4 md:justify-center min-h-screen">
      <audio ref={audioRef} src={songFile} loop>
        <track kind="captions" />
      </audio>
      <button
        onClick={togglePlay}
        className="px-2 py-2 bg-secondary text-white rounded-full hover:bg-secondary-focus transition-colors">
        {isPlaying ? (
          <IoPauseCircle size={30} />
        ) : (
          <IoIosPlayCircle size={30} />
        )}
      </button>
      <div>
        <div className="relative w-full lg:max-w-5xl rounded-lg hidden md:block overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 h-[80vh]"
              >
                <img
                  src={image}
                  alt={`gallery${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={prevSlide} className="btn btn-circle">❮</button>
            <button onClick={nextSlide} className="btn btn-circle">❯</button>
          </div>
        </div>
        <div className="md:hidden w-full px-4">
          <div
            ref={carouselRef}
            className="carousel rounded-box w-full overflow-x-auto snap-x snap-mandatory animate-[slideUp_1s_ease-out] ">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="carousel-item w-full flex-shrink-0 snap-start flex justify-center items-center rounded-lg">
                <img
                  src={image}
                  alt={`gallery${index + 1}`}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {galleryImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-secondary scale-150"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
