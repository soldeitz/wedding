import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export default function Index() {
  return (
    <>
      <div
        className="hero h-screen"
        style={{
          backgroundImage: "url(hero-index.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Irene e Carlo</h1>
            <p className="text-lg font-bold">26/12/2024</p>
            <p className="mt-10">
              Ardi, non troppo vicino al cielo e non troppo lontano. Ricordati,
              cuore, di quello sguardo in cui ti attende tutta l’eternità.
              <span className="text-right">Karol Wojtyła</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
