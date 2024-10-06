import type { MetaFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { readGuests } from "~/server";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

// export const loader = async () => {
//   const guests = readGuests();
//   return { guests };
// };

export default function Rsvp() {
  // const { guests } = useLoaderData<typeof loader>();
  // return <div>{JSON.stringify(guests)}</div>;
  return <div>Rsvp</div>;
}
