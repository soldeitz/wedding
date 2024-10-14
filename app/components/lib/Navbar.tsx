import { Link, useLocation } from "@remix-run/react";
import { MdOutlineMenu } from "react-icons/md";

export const Navbar = () => {
  const location = useLocation();
  const route = location.pathname.split("/")[1] || "";

  const titleMap: { [key: string]: string } = {
    "": "Irene e Carlo", // For the home route
    cerimonia: "Cerimonia",
    rsvp: "RSVP",
    "lista-nozze": "Lista Nozze",
    ricevimento: "Ricevimento",
    galleria: "Galleria",
  };

  const title = titleMap[route] || "Irene e Carlo";

  return (
    <>
      {/* // MOBILE */}
      <div className="flex justify-between items-center md:hidden">
        <h1 className="text-2xl w-full ml-2">{title}</h1>
        <div className="drawer drawer-end justify-end ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn-ghost btn">
              <MdOutlineMenu className="text-2xl" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"></label>
            <ul className="menu bg-amber-50 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="cerimonia"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }>
                  Cerimonia
                </Link>
              </li>
              <li>
                <Link
                  to="rsvp"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }>
                  RSVP
                </Link>
              </li>
              <li>
                <Link
                  to="lista-nozze"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }>
                  Lista Nozze
                </Link>
              </li>
              <li>
                <Link
                  to="ricevimento"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }>
                  Ricevimento
                </Link>
              </li>
              <li>
                <Link
                  to="galleria"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }>
                  Galleria
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* // DESKTOP */}

      <nav className="absolute top-0 left-0 right-0 w-100 justify-between mx-10 mt-7 text-slate-900 hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="cerimonia">Cerimonia</Link>
        <Link to="rsvp">RSVP</Link>
        <Link to="lista-nozze">Lista Nozze</Link>
        <Link to="ricevimento">Ricevimento</Link>
        <Link to="galleria">Galleria</Link>
      </nav>
    </>
  );
};
