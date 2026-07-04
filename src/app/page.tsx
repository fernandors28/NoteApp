import { Navbar } from "./components/navbar";
import Image from "next/image";
function Content() {
  return (
    <div className=" h-screen w-full ">
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex flex-row h-11/12 bg-amber-50 w-11/12">
          <div className="h-full w-1/4 bg-amber-200"></div>
          <div className="h-full w-3/4 bg-amber-950"></div>
        </div>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <main>
      <div className="h-screen  bg-slate-300">
        <div className="flex flex-col h-full w-full">
          <Navbar />
          <Content />
        </div>
      </div>
    </main>
  );
}
