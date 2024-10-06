import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export default function Galleria() {
  return <div>galleria</div>;
}
