import { Navbar } from "./Navbar";

type ShellProps = { children: React.ReactNode };

export const Shell = ({ children }: ShellProps) => {
  return (
    <div className="px-5 pt-4">
      <Navbar />
      {children}
    </div>
  );
};
