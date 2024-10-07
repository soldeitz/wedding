import { Link } from "@remix-run/react";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 w-100 flex justify-between mx-10 mt-7 text-base-200">
      <Link to="/">Home</Link>
      <Link to="cerimonia">Cerimonia</Link>
      <Link to="rsvp">RSVP</Link>
      <Link to="lista-nozze">Lista Nozze</Link>
      <Link to="ricevimento">Ricevimento</Link>
      <Link to="galleria">Galleria</Link>
    </nav>
  );
};
