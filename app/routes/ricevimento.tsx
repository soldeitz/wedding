import type { MetaFunction } from "@remix-run/node";

import ricevimento1 from "../assets/images/ricevimento1.jpg";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export default function Ricevimento() {
  return (
    <div className="flex flex-col">
      <div className="h-screen md:mx-auto md:py-8">
        <div className="flex flex-col justify-center gap-6 h-full items-center px-4 ">
          <div className="fade-in mx-auto p-4 md:w-[60vw] flex flex-col gap-4 justify-center items-center">
            <p className="text-center text-xl md:text-2xl md:w-64">
              Dopo la cerimonia festeggeremo insieme al{" "}
            </p>
            <p className="text-center text-5xl md:text-7xl font-andaray">
              <Link
                className="hover:underline"
                to={"https://www.museodiocesano.it/"}
              >
                Museo Diocesano di Milano
              </Link>
            </p>
          </div>
          <img
            src={ricevimento1}
            alt="ricevimento1"
            className="hidden md:block animate-[slideUp_1s_ease-out] md:w-2/3 rounded-lg"
          />
          <div
            className="bg-cover bg-center md:hidden block animate-[slideUp_1s_ease-out] w-[90vw] h-[50vh] rounded-lg"
            style={{ backgroundImage: `url(${ricevimento1})` }}
          ></div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-around items-center">
        <div>
          <h3 className="text-center text-4xl md:text-6xl mb-10 mt-20">
            Come raggiungere il Museo
          </h3>
          <div className="w-full flex justify-center mb-10">
            <iframe
              className="w-[80vw] md:w-[600px] h-96"
              title="mappa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1699.421862349014!2d9.179567876354477!3d45.45453279852263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c400ad032415%3A0x4b90150a380b7281!2sPiazza%20Sant&#39;Eustorgio%2C%203%2C%2020122%20Milano%20MI!5e1!3m2!1sit!2sit!4v1729155520706!5m2!1sit!2sit"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 mt-20">
            A piedi
          </h3>

          <ul className="list-disc space-y-4 ml-6 max-w-[60rem] md:px-6 text-2xl mb-20">
            <li>
              Il Museo può essere raggiunto a piedi direttamente dalla Basilica
              di San Nazaro in circa 15 minuti.
            </li>
          </ul>

          <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 mt-20">
            In auto
          </h3>

          <ul className="list-disc space-y-4 ml-6 max-w-[60rem] md:px-6 text-2xl mb-20">
            <li>
              Il museo si trova a pochi minuti di auto dalla Basilica di San
              Nazaro.
            </li>
            <li>
              Il 26 dicembre è un giorno festivo: l&apos;Area C non è attiva e
              non si deve acquistare il ticket di ingresso.
            </li>
            <li>
              È possibile parcheggiare gratuitamente sulle strisce blu (e, come
              sempre, su quelle bianche) oppure, a pagamento, nei garage vicini
              al Museo, per esempio:
              <ul className="mt-2 space-y-2">
                <li>
                  Giangaleazzo Parking:
                  <br />
                  <Link
                    className="hover:underline text-secondary"
                    to="https://maps.app.goo.gl/HiJBYkAHyv1UFo2w6"
                  >
                    V.le Gian Galeazzo, 9, 20136 Milano MI, Italia
                  </Link>
                </li>
                <li>
                  Ticinese Parking:
                  <br />
                  <Link
                    className="hover:underline text-secondary"
                    to="https://maps.app.goo.gl/4qxwnjNTiMrA5rfL7"
                  >
                    V.le Col di Lana, 4/a, 20136 Milano MI, Italia
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 mt-20">
            Con i mezzi pubblici
          </h3>

          <ul className="list-disc space-y-4 ml-6 max-w-[60rem] md:px-6 text-2xl mb-20">
            <li>Con il tram 3 (da via Torino)</li>
            <li>Con l’autobus 94 (da Corso di Porta Romana/Via Santa Sofia)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
