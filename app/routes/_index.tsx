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
				<header className="flex flex-col items-center gap-9">
					<h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
						Welcome to{" "}
						<span className="sr-only">Irene e Carlo</span>
					</h1>
					<div className="h-[144px] w-[434px]">
						<img
							src="/logo-light.png"
							alt="Remix"
							className="block w-full dark:hidden"
						/>
						<img
							src="/logo-dark.png"
							alt="Remix"
							className="hidden w-full dark:block"
						/>
					</div>
				</header>
			</div>
		</div>
	);
}
