import { LoaderFunction } from "@remix-run/node";
import { MetaFunction, Outlet, redirect } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const params = url.pathname.split("/").filter((c) => c !== "/");
  const current = params[params.length - 1];
  if (current === "admin") return redirect("/admin/dashboard");
  return {};
};

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-stretch md:items-center">
      <Outlet />
    </div>
  );
};

export default Admin;
