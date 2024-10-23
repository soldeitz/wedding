import type { MetaFunction } from "@remix-run/node";
import { getValidatedFormData } from "remix-hook-form";
import { redirect } from "@remix-run/react";
import { ActionFunctionArgs, json } from "@remix-run/node"; // or cloudflare/deno
import { Guest, GuestSchema } from "~/utility";
import { zodResolver } from "@hookform/resolvers/zod";
import RsvpForm from "~/components/lib/RsvpForm";
import { createGuest } from "~/server/lib/api/createGuest.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

const resolver = zodResolver(GuestSchema);

export const action = async ({ request }: ActionFunctionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<Guest>(request, resolver);
  if (errors) {
    // The keys "errors" and "defaultValues" are picked up automatically by useRemixForm
    console.error(errors);
    return json({ errors, defaultValues });
  }

  createGuest(data);

  return redirect("/rsvp-ok");
};

const Rsvp = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-stretch md:items-center mt-5 md:mt-0 pb-10 md:pb-0">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="font-andaray text-7xl md:text-9xl mb-5 text-center">
          Répondez, s&apos;il vous plaît
        </h1>
        <div className="text-2xl text-center md:max-w-[800px]">
          Per aiutarci a organizzare al meglio la festa, vi chiediamo la
          gentilezza di comunicarci la vostra presenza entro il 15 novembre
          2024, compilando il form:
        </div>
      </div>
      <RsvpForm />
    </div>
  );
};

export default Rsvp;
