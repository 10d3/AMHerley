import Image from "next/image";
import Link from "next/link";
import { LuYoutube } from "react-icons/lu";

export const metadata = {
  title: "Home | Algorithms and Data Structure",
  description: "Master Algorithms and Data Structure",
  icons: "/favicon.ico",
  keywords: [
    "algorithms",
    "data structure",
    "leetcode",
    "coding interview",
    "programming",
    "javascript",
    "typescript",
    "python",
    "java",
    "c++",
    "coding challenges",
    "algorithm tutorials",
    "data structure tutorials",
    "algorithm visualizations",
    "data structure visualizations",
  ],
};

export default function Home() {
  const algo = [
    "bubble-sort",
    "two-pointer",
    "sliding-window",
    "binary-search",
    "dfs",
    "bfs",
    "topological-sort",
    "linked-list",
    "tree",
    "graph",
  ];
  const dataStructure = ["array", "stack", "queue", "hash-table", "heap"];
  return (
    <div className="flex flex-col gap-4 items-center w-full min-h-screen justify-center">
      <h1 className="text-4xl font-bold">
        Master Algorithms and data structure
      </h1>
      <div className="max-w-4xl mx-auto p-4 flex flex-row justify-between gap-16">
        <div className="flex flex-col gap-2">
          <h1 className=" text-xl font-bold">Algorithms</h1>
          <div className="flex flex-col gap-1">
            {algo.map((item, i) => (
              <Link
                className="text-md text-blue-500"
                key={i}
                href={`/algorithms/${item}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className=" text-xl font-bold">Data Structure</h1>
          <div className="flex flex-col gap-1">
            {dataStructure.map((item, i) => (
              <Link
                className="text-md text-blue-500"
                key={i}
                href={`/data-structures/${item}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link
        className="font-semibold text-xl flex flex-row items-center"
        href={"https://youtube.com/@amherley?si=pnaA5cNigoI0QB_l"}
      >
        <LuYoutube className="size-8 mr-2" />
        AMHerley
        <Image
          alt="youtube photo profile"
          src={"/channel-logo.jpg"}
          width={442}
          height={442}
          className="size-14 ml-2 rounded-lg"
        />
      </Link>
    </div>
  );
}
