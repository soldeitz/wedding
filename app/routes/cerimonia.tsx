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
        <div className="flex flex-col justify-center gap-10 h-full items-center px-4 ">
          <div className="fade-in mx-auto p-4 md:w-[60vw] flex flex-col gap-4 justify-center items-center md:h-full">
            <p className="text-center text-5xl md:text-7xl font-andaray">
              26 Dicembre 2024
            </p>
            <p className="text-center text-xl md:text-2xl md:w-64">
              Ci sposeremo alle 14.30 alla Basilica di San Nazaro in Brolo a
              Milano.
            </p>
          </div>
          <img
            src={cerimonia1_desktop}
            alt="cerimonia1"
            className="hidden md:block animate-[slideUp_1s_ease-out] md:w-2/3 rounded-lg"
          />
          <img
            src={cerimonia1_mobile}
            alt="cerimonia1"
            className="md:hidden block animate-[slideUp_1s_ease-out] h-[45vh] rounded-lg"
          />
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-around items-center">
        <div>
          <h3 className="text-center text-4xl md:text-6xl mb-10 mt-20">
            Come raggiungere la Basilica
          </h3>

          <div className="w-full flex justify-center mb-10">
            <iframe
              className="w-[80vw] md:w-[600px] h-96"
              title="mappa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.4034632126477!2d9.192743199999999!3d45.458492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a8107895af%3A0x16687f160cfa8af2!2sPiazza%20S.%20Nazaro%20in%20Brolo%2C%205%2C%2020122%20Milano%20MI!5e1!3m2!1sit!2sit!4v1729002838246!5m2!1sit!2sit"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 mt-20">
            Per chi arriva in auto
          </h3>

          <ul className="list-disc space-y-4 ml-6 max-w-[60rem] md:px-6 text-2xl mb-20">
            <li>
              Il 26 dicembre è un giorno festivo: l&apos;Area C non è attiva e
              non si deve acquistare il ticket di ingresso.
            </li>
            <li>
              Essendo un giorno festivo, è possibile parcheggiare gratuitamente
              sulle strisce blu (e, come sempre, su quelle bianche) oppure, a
              pagamento, in uno dei garage vicini alla chiesa, per esempio:
              <ul className="mt-2 space-y-2">
                <li>
                  Parcheggio del Centro:
                  <br />
                  <Link
                    className="hover:underline text-secondary"
                    to="https://www.google.it/maps/place/Via+Privata+Pietro+Calderon+de+la+Barca,+2,+20122+Milano+MI/@45.4585137,9.1884985,1081m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4786c6a831da9929:0x5cd40a1cdd927a62!8m2!3d45.4585137!4d9.1910734!16s%2Fg%2F11q8fkc8cf?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                  >
                    Via Privata Pietro Calderon de la Barca, 2, 20122 Milano MI,
                    Italia
                  </Link>
                </li>
                <li>
                  Car Central Parking:
                  <br />
                  <Link
                    className="hover:underline text-secondary"
                    to="https://www.google.it/maps/place/Via+Chiaravalle,+12,+20122+Milano+MI/@45.4604639,9.1899609,1081m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4786c6a8f463c195:0xbeaaa5e1894b25de!8m2!3d45.4604639!4d9.1925358!16s%2Fg%2F11bw4j9hv0?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                  >
                    Via Chiaravalle, 12, 20122 Milano MI, Italia
                  </Link>
                </li>
                <li>
                  Largo Francesco Richini, 15 Parking:
                  <br />
                  <Link
                    className="hover:underline text-secondary"
                    to="https://www.google.it/maps/place/Largo+Francesco+Richini,+15,+20122+Milano+MI/@45.4592336,9.1901204,1081m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4786c6a86c1e1f15:0xd13e01148f2ac9d5!8m2!3d45.4592336!4d9.1926953!16s%2Fg%2F11scx77hl7?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                  >
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
