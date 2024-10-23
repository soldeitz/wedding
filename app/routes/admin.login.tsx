import { zodResolver } from "@hookform/resolvers/zod";
import { useRemixForm } from "remix-hook-form";
import { User, UserSchema } from "~/utility";
import ErrorMessage from "~/components/lib/ErrorMessage";
import { Form, json, useLoaderData } from "@remix-run/react";
import { ActionFunctionArgs, LoaderFunction } from "@remix-run/node";
import authenticator from "~/server/lib/auth.server";
import { sessionStorage } from "~/server/lib/session.server";

const resolver = zodResolver(UserSchema);

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const resp = await authenticator.authenticate("form", request, {
    successRedirect: "/admin/dashboard",
    failureRedirect: "/admin/login",
    throwOnError: true,
    context,
  });
  console.log(resp);
  return resp;
};

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/admin/dashboard",
  });

  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const error = session.get("sessionErrorKey");
  return json({ error });
};

const Login = () => {
  const loaderData = useLoaderData<{ error?: { message: string } }>();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useRemixForm<User>({
    mode: "onSubmit",
    resolver,
  });

  return (
    <>
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-6xl text-center">Login</h1>
      </div>
      <Form
        className="bg-slate-200 rounded-lg shadow-lg text-primary p-4 flex flex-col items-stretch md:items-center"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-4">
          <div className="flex flex-col justify-start items-stretch">
            <label htmlFor="username" className="text-md">
              Username *
            </label>
            <input
              id="username"
              type="username"
              className="input input-bordered w-full md:max-w-xs font-sans font-light"
              {...register("username")}
            />
            <ErrorMessage error={errors.username} />
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor="password" className="text-md">
              Password *
            </label>
            <input
              id="password"
              type="password"
              className="input input-bordered w-full md:max-w-xs font-sans font-light"
              {...register("password")}
            />
            <ErrorMessage error={errors.password} />
          </div>
        </div>
        <div>
          {loaderData?.error ? (
            <p className="text-error text-sm mt-4 font-bold font-sans">
              {loaderData?.error?.message}
            </p>
          ) : null}
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="btn btn-primary text-bold text-lg text-white"
            type="submit"
          >
            Login
          </button>
        </div>
      </Form>
    </>
  );
};

export default Login;
