import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { readGuests } from "~/server";
import authenticator from "~/server/lib/auth.server";
import { Guest } from "~/utility";
import { export_table_to_csv } from "~/utility/lib/tableToCsv";

export const loader: LoaderFunction = async ({ request }) => {
  const isAuthenticated = await authenticator.isAuthenticated(request);
  if (!isAuthenticated) {
    return redirect("/admin/login");
  }

  const guests = await readGuests();
  return guests;
};

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/admin/login" });
};

export default function DashboardPage() {
  const data: [Guest] = useLoaderData();

  return (
    <>
      <h1 className="text-center w-full text-6xl font-bold mb-4">Guest List</h1>
      <div className="flex flex-row justify-center gap-4 mb-10">
        <Form method="post">
          <button type="submit" className="btn btn-secondary text-xl font-bold">
            Logout
          </button>
        </Form>
        <button
          className="btn btn-info text-xl font-bold"
          onClick={() =>
            export_table_to_csv(
              document.querySelector("#guestTable")!,
              "guests"
            )
          }
        >
          Scarica
        </button>
      </div>
      <div className="overflow-scroll w-screen md:w-fit px-5">
        <table id="guestTable" className="table text-xl font-sans">
          <thead>
            <tr className="text-slate-200 text-bold text-xl text-center">
              <th>Nome</th>
              <th>Cognome</th>
              <th>Figli</th>
              <th>Presente</th>
              <th>Allergie</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {data.map((guest, index) => (
              <tr key={index}>
                <td>{guest.first_name}</td>
                <td>{guest.last_name}</td>
                <td>{guest.children}</td>
                <td
                  className={`text-center font-bold ${
                    guest.is_present ? "bg-emerald-600" : "bg-rose-600"
                  }`}
                >
                  {guest.is_present ? "Sì" : "No"}
                </td>
                <td>{guest.allergies}</td>
                <td>{guest.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
