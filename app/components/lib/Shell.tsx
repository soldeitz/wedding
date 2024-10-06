import { Navbar } from "./Navbar";

type ShellProps = { children: React.ReactNode };

export const Shell = ({ children }: ShellProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
