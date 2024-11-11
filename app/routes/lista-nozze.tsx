import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import fiesta1_desktop from "../assets/images/fiesta1_desktop.jpeg";
import fiesta1_mobile from "../assets/images/fiesta1_mobile.jpeg";
import fiesta2_desktop from "../assets/images/fiesta2_desktop.jpeg";
import fiesta2_mobile from "../assets/images/fiesta2_mobile.jpeg";
import sa1_desktop from "../assets/images/sa1_desktop.png";
import sa2_desktop from "../assets/images/sa2_desktop.png";
import sa3_desktop from "../assets/images/sa3_desktop.png";
import sa4_desktop from "../assets/images/sa4_desktop.png";
import sa5_desktop from "../assets/images/sa5_desktop.png";
import sa6_desktop from "../assets/images/sa6_desktop.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export default function ListaNozze() {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = [
    sa1_desktop,
    sa5_desktop,
    sa3_desktop,
    sa4_desktop,
    sa2_desktop,
    sa6_desktop,
  ];

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

  useEffect(() => {
    if (copied1 || copied2) {
      setTimeout(() => {
        setCopied1(false);
        setCopied2(false);
      }, 2000);
    }
  }, [copied1, copied2]);

  return (
    <div className="flex flex-col">
      <div className="min-h-screen md:mx-auto md:py-8">
        <div className="flex flex-col justify-center md:h-full items-center px-4">
          <div className="fade-in mx-auto p-4 flex flex-col gap-4 justify-center items-center lg:w-[70vw]">
            <p className="text-center text-5xl md:text-7xl font-andaray mt-1 md:mt-0">
              Viaggio di nozze
            </p>
            <p className="text-center text-lg md:text-2xl">
              Il 27 dicembre partiremo per il nostro viaggio di nozze in Sud
              Africa! Se avete voglia di darci una mano a raggiungere il Capo di
              Buona Speranza potete sostenerci con un regalo a:
            </p>
            <div className="flex flex-col gap-2 text-md md:text-xl items-center">
              <div className="flex gap-2 items-center text-sm md:text-lg">
                <p>IBAN: IT57U0569601600000026375X24</p>
                {copied1 ? (
                  <p className="text-secondary">Copiato!</p>
                ) : (
                  <button
                    className="bg-slate-700 text-white p-2 rounded-md"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "IT57U0569601600000026375X24"
                      );
                      setCopied1(true);
                    }}
                  >
                    <FaRegCopy />
                  </button>
                )}
              </div>
              <div className="">Intestato a Carlo Carù</div>
              <div>Causale: Matrimonio Irene e Carlo</div>
            </div>
            <div className="flex flex-col gap-2 text-md md:text-xl items-center">
              <div className="font-bold text-lg md:text-2xl">
                Für die deutsche Freunde:
              </div>
              <div className="flex gap-2 items-center text-sm md:text-lg">
                <p>IBAN: DE10500105175422300500</p>
                {copied2 ? (
                  <p className="text-secondary">Kopiert!</p>
                ) : (
                  <button
                    className="bg-slate-700 text-white p-2 rounded-md"
                    onClick={() => {
                      navigator.clipboard.writeText("DE10500105175422300500");
                      setCopied2(true);
                    }}
                  >
                    <FaRegCopy />
                  </button>
                )}
              </div>
              <div className="">Empfänger Irene Ferrari</div>
              <div className="text-center">
                Verwendungszweck: Hochzeit Irene und Carlo
              </div>
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 animate-[slideUp_1s_ease-out] md:max-w-[80vw] mx-auto">
              <img
                src={sa1_desktop}
                alt="South Africa 1"
                className="rounded-lg mb-4 md:mb-0 w-full h-auto object-cover"
              />
              <img
                src={sa5_desktop}
                alt="South Africa 2"
                className="rounded-lg mb-4 md:mb-0 w-full h-auto object-cover"
              />
              <img
                src={sa3_desktop}
                alt="South Africa 3"
                className="rounded-lg mb-4 md:mb-0 w-full h-auto object-cover"
              />
              <img
                src={sa4_desktop}
                alt="South Africa 4"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:hidden">
            <div
              ref={carouselRef}
              className="carousel rounded-box w-full overflow-x-auto snap-x snap-mandatory animate-[slideUp_1s_ease-out]"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="carousel-item w-full flex-shrink-0 snap-start"
                >
                  <img
                    src={image}
                    alt={`South Africa ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {images.map((_, index) => (
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
      <div className="mt-8 md:mx-auto md:py-8">
        <div className="flex flex-col justify-center gap-10 h-full items-center px-4">
          <div className="fade-in mx-auto p-4 flex flex-col gap-4 justify-center items-center md:h-full lg:w-[70vw]">
            <p className="text-center text-5xl md:text-7xl font-andaray">
              Pronti a tutte le partenze
            </p>
            <p className="text-center text-lg md:text-2xl">
              A Monaco cercheremo di muoverci nel modo più sostenibile
              possibile: a piedi, in bici e con i mezzi pubblici… Ma per tornare
              a trovarvi in Italia, visto che per il nostro amore💕 la Fiesta ha
              già superato i 250.000 km, presto ci servirà una nuova automobile:
              se volete contribuire alla causa…
            </p>
            <div className="flex flex-col gap-2 text-md md:text-xl items-center">
              <div className="flex gap-2 items-center text-sm md:text-lg">
                <p>IBAN: IT57U0569601600000026375X24</p>
                {copied1 ? (
                  <p className="text-secondary">Copiato!</p>
                ) : (
                  <button
                    className="bg-slate-700 text-white p-2 rounded-md"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "IT57U0569601600000026375X24"
                      );
                      setCopied1(true);
                    }}
                  >
                    <FaRegCopy />
                  </button>
                )}
              </div>
              <div className="">Intestato a Carlo Carù</div>
              <div>Causale: Matrimonio Irene e Carlo</div>
            </div>
            <div className="flex flex-col gap-2 text-md md:text-xl items-center">
              <div className="font-bold text-lg md:text-2xl">
                Für die deutsche Freunde:
              </div>
              <div className="flex gap-2 items-center text-sm md:text-lg">
                <p>IBAN: DE10500105175422300500</p>
                {copied2 ? (
                  <p className="text-secondary">Kopiert!</p>
                ) : (
                  <button
                    className="bg-slate-700 text-white p-2 rounded-md"
                    onClick={() => {
                      navigator.clipboard.writeText("DE10500105175422300500");
                      setCopied2(true);
                    }}
                  >
                    <FaRegCopy />
                  </button>
                )}
              </div>
              <div className="">Empfänger Irene Ferrari</div>
              <div className="text-center">
                Verwendungszweck: Hochzeit Irene und Carlo
              </div>
            </div>
          </div>
          <div className="w-1/2 hidden md:block">
            <div className="diff aspect-[16/9] rounded-lg">
              <div className="diff-item-1">
                <img
                  src={fiesta1_desktop}
                  alt="fiesta1"
                  className="rounded-lg h-auto object-cover"
                />
              </div>
              <div className="diff-item-2">
                <img
                  src={fiesta2_desktop}
                  alt="fiesta1"
                  className="rounded-lg h-auto object-cover"
                />
              </div>
              <div className="diff-resizer"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="diff aspect-[3/4] rounded-lg">
          <div className="diff-item-1">
            <img
              src={fiesta2_mobile}
              alt="fiesta1"
              className="rounded-lg h-auto object-cover my-auto"
            />
          </div>
          <div className="diff-item-2">
            <img
              src={fiesta1_mobile}
              alt="fiesta1"
              className="rounded-lg h-auto object-cover"
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </div>
  );
}
