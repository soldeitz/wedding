import type { MetaFunction } from "@remix-run/node";

import cerimonia1_desktop from "../assets/images/cerimonia1_desktop.png";
import cerimonia1_mobile from "../assets/images/cerimonia1_mobile.png";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export default function Cerimonia() {
  return (
    <div className="flex flex-col">
      <div className="h-screen md:mx-auto md:py-8">
        <div className="flex flex-col justify-around h-full items-center px-4 ">
          <div className="fade-in mx-auto p-4 md:w-1/2 flex flex-col gap-4 justify-center md:h-full">
            <p className="text-center text-3xl md:text-4xl">26 Dicembre 2024</p>
            <p className="text-center text-xl md:text-2xl">
              Ci sposeremo alle 14.30 alla Basilica di San Nazaro in Brolo a
              Milano.
            </p>
          </div>
          <img
            src={
              window.innerWidth < 768 ? cerimonia1_mobile : cerimonia1_desktop
            }
            alt="cerimonia1"
            className="animate-[slideUp_1s_ease-out] md:w-2/3 rounded-lg"
          />
        </div>
      </div>
      <div className="h-screen flex flex-col justify-around items-center">
        <Link
          to="https://www.google.it/maps/place/Piazza+S.+Nazaro+in+Brolo,+5,+20122+Milano+MI/@45.458492,9.1901683,1081m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4786c6a8107895af:0x16687f160cfa8af2!8m2!3d45.458492!4d9.1927432!16s%2Fg%2F11c22qyvy4?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          className="underline text-blue-500">
          Piazza San Nazaro in Brolo, 5, 20122 Milano MI, Italia
        </Link>

        <div>
          <h3 className="text-center text-2xl md:text-3xl mb-4">
            Per chi arriva in auto 🚗
          </h3>

          <ul className="list-disc space-y-4 ml-6">
            <li>
              Il 26 dicembre è un giorno festivo: l&apos;Area C non è attiva e
              non si deve acquistare il ticket di ingresso.
            </li>
            <li>
              Essendo un giorno festivo, è possibile parcheggiare gratuitamente
              sulle strisce blu (e, come sempre, su quelle bianche) oppure, a
              pagamento, in uno dei garage vicini alla chiesa, per esempio:
              <ul className="list-circle mt-2 ml-6 space-y-2">
                <li>
                  Parcheggio del Centro:
                  <br />
                  <Link
                    className="underline text-blue-500"
                    to="https://www.google.it/maps/place/Via+Privata+Pietro+Calderon+de+la+Barca,+2,+20122+Milano+MI/@45.4585137,9.1884985,1081m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4786c6a831da9929:0x5cd40a1cdd927a62!8m2!3d45.4585137!4d9.1910734!16s%2Fg%2F11q8fkc8cf?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
                    Via Privata Pietro Calderon de la Barca, 2, 20122 Milano MI,
                    Italia
                  </Link>
                </li>
                <li>
                  Car Central Parking:
                  <br />
                  <Link
                    className="underline text-blue-500"
                    to="https://www.google.it/maps/place/Via+Chiaravalle,+12,+20122+Milano+MI/@45.4604639,9.1899609,1081m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4786c6a8f463c195:0xbeaaa5e1894b25de!8m2!3d45.4604639!4d9.1925358!16s%2Fg%2F11bw4j9hv0?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
                    Via Chiaravalle, 12, 20122 Milano MI, Italia
                  </Link>
                </li>
                <li>
                  Largo Francesco Richini, 15 Parking:
                  <br />
                  <Link
                    className="underline text-blue-500"
                    to="https://www.google.it/maps/place/Largo+Francesco+Richini,+15,+20122+Milano+MI/@45.4592336,9.1901204,1081m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4786c6a86c1e1f15:0xd13e01148f2ac9d5!8m2!3d45.4592336!4d9.1926953!16s%2Fg%2F11scx77hl7?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
                    Largo Francesco Richini, 15, 20122 Milano MI, Italia
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
