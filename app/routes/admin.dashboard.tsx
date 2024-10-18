import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import authenticator from "~/server/lib/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/admin/login",
  });
};

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/admin/login" });
};

export default function DashboardPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = useLoaderData();
  console.log(data);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix Protected Dashboard</h1>
      <p>
        {data?.name} {data?.token}
      </p>
      <Form method="post">
        <button>Log Out</button>
      </Form>
    </div>
  );
}
