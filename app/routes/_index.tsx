import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Irene e Carlo" },
    { name: "description", content: "Sito Matrimonio di Irene e Carlo" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <h1 className="leading text-5xl md:text-8xl font-bold text-gray-800 dark:text-gray-100">
          Irene e Carlo
        </h1>
        <div className="flex space-x-2 justify-center items-center bg-white dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-6 w-6 md:h-8 md:w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-6 w-6 md:h-8 md:w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-6 w-6 md:h-8 md:w-8 bg-black rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
