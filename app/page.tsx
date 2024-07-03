import Image from "next/image";
import { Hello } from "../pages/hello";
import { Header } from "../pages/Header";
import { Index } from "../pages/main";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col p-10">
        <Header></Header>
        <Index></Index>
      </main>
    </>
  );
}
