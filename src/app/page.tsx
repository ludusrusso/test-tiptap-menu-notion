"use client";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./editor").then((m) => m.Editor), {
  ssr: false,
});

export default function Home() {
  return <Editor />;
}
