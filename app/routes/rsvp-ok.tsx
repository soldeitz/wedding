import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export default function RsvpOk() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-9xl font-bold font-andaray mb-6">Grazie!</h1>
      <h2 className="text-3xl font-bold mb-1">
        La tua risposta è stata inviata con successo.
      </h2>
      <h2 className="text-3xl font-bold">
        Torna alla{" "}
        <Link className="text-secondary hover:underline" to={"/"}>
          Homepage
        </Link>
      </h2>
    </div>
  );
}
