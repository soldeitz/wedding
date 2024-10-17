import { Link, useLocation } from "@remix-run/react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

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
      <div className="flex justify-between items-center md:hidden z-20">
        <h1 className="text-3xl w-full">{title}</h1>
        <div className="drawer drawer-end justify-end">
          <input
            id="my-drawer-4"
            type="checkbox"
            className="drawer-toggle"
            onChange={() => document.body.classList.toggle("hide-scroll")}
          />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn-ghost btn p-0"
            >
              <MdOutlineMenu className="text-4xl p-0" />
            </label>
          </div>
          <div className="drawer-side overflow-hidden z-50">
            <div className="absolute top-0 left-0 right-0 flex justify-end px-5 pt-4 z-50">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-button btn-ghost btn p-0"
              >
                <RxCross1 className="text-4xl p-0 text-base-content" />
              </label>
            </div>
            <div className="menu gap-12 text-center bg-amber-50 text-base-content h-full w-full pt-20 px-4">
              {/* Sidebar content here */}
              <div className="text-5xl font-bold">
                <Link
                  to="/"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }
                >
                  Home
                </Link>
              </div>
              <div className="text-5xl font-bold">
                <Link
                  to="cerimonia"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }
                >
                  Cerimonia
                </Link>
              </div>
              <div className="text-5xl font-bold">
                <Link
                  to="rsvp"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }
                >
                  RSVP
                </Link>
              </div>
              <div className="text-5xl font-bold">
                <Link
                  to="lista-nozze"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }
                >
                  Lista Nozze
                </Link>
              </div>
              <div className="text-5xl font-bold">
                <Link
                  to="ricevimento"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }
                >
                  Ricevimento
                </Link>
              </div>
              <div className="text-5xl font-bold">
                <Link
                  to="galleria"
                  onClick={() =>
                    document.getElementById("my-drawer-4")?.click()
                  }
                >
                  Galleria
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // DESKTOP */}

      <nav className="absolute top-0 left-0 right-0 w-100 justify-center gap-10 mx-10 mt-7 hidden md:flex text-xl">
        <Link className={route === "" ? "text-secondary" : ""} to="/">
          Home
        </Link>
        <Link
          className={route === "cerimonia" ? "text-secondary font-bold" : ""}
          to="cerimonia"
        >
          Cerimonia
        </Link>
        <Link
          className={route === "rsvp" ? "text-secondary font-bold" : ""}
          to="rsvp"
        >
          RSVP
        </Link>
        <Link
          className={route === "lista-nozze" ? "text-secondary font-bold" : ""}
          to="lista-nozze"
        >
          Lista Nozze
        </Link>
        <Link
          className={route === "ricevimento" ? "text-secondary font-bold" : ""}
          to="ricevimento"
        >
          Ricevimento
        </Link>
        <Link
          className={route === "galleria" ? "text-secondary font-bold" : ""}
          to="galleria"
        >
          Galleria
        </Link>
      </nav>
    </>
  );
};
