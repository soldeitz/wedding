import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import loading from "./assets/images/loading.gif";

import "./tailwind.css";
import { Shell } from "./components/lib/Shell";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1200);
  }, []);
  return (
    <>
      {splash ? (
        <div className="h-screen">
          <div className="flex justify-center items-center h-full">
            <img src={loading} alt="loading" />
          </div>
        </div>
      ) : (
        <Shell>
          <Outlet />
        </Shell>
      )}
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang="it">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-9xl mb-6">Oh no!</h1>
        <p className="text-3xl">Qualcosa è andato storto...</p>
        <p className="text-3xl">
          Torna alla{" "}
          <Link className="text-secondary hover:underline" to={"/"}>
            homepage
          </Link>
        </p>
        <Scripts />
      </body>
    </html>
  );
}
