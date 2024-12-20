import type { MetaFunction } from "@remix-run/node";
import logo from "../assets/images/logo_white.png";
import home1 from "../assets/images/home1_mobile.png";
import home1_desktop from "../assets/images/home1_desktop.png";
export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col">
      <div className="h-screen md:mx-auto ">
        <div className="flex flex-col justify-start mt-8 md:mt-0 md:justify-center h-full items-center">
          <img
            src={logo}
            alt="logo"
            className="animate-[slideUp_1s_ease-out] v-[30vw] md:w-[33vw]"
          />
          <div className="fade-in mx-auto p-4">
            <p className="text-center text-1xl md:text-4xl">
              Ardi, non troppo vicino al cielo <br />
              e non troppo lontano. <br />
              Ricordati, cuore, di quello sguardo <br />
              in cui ti attende tutta l’eternità.
            </p>
            <p className="w-full text-end">Karol Wojtyła</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-col justify-evenly h-full">
          <img src={home1_desktop} alt="home1" />
        </div>
      </div>
      <div className="block md:hidden mb-6">
        <img src={home1} alt="home1" />
      </div>
    </div>
  );
}
