import { Navbar } from "../components/navbar";
import {Editor} from "@/components/feature/DynamicEditor";
function Content() {
  const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];
  return (
    <div className=" h-screen w-full ">
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex flex-row h-11/12 bg-amber-50 w-11/12">
          <div className="relative flex flex-col h-full w-1/4 bg-amber-200 items-center">
            <div className="absolute  h-1/12 w-full  p-1  bg-blue-400">
              <div className="w-full flex flex-row bg-black h-full">
                <div className="flex h-full w-1/2 items-center">
                  <i className="bi bi-plus-circle mx-4"></i>
                </div>
                <div className="flex w-1/2 justify-end">
                  <h1 className=" text-xl mx-5">Notas</h1>
                </div>
              </div>
            </div>
            <div className="overflow-y-auto pt-10 justify-centerspace-y-1 w-full h-full">
              {arr.map((item) => (
                <div key={item.id} className="h-[27%] w-[85 %] mx-2 my-1 bg-white">
                    <div className="w-full h-[23%] bg-blue-950"></div>
                    <div className="w-full h-[60%] "></div>
                    <div className="flex flex-row w-full h-[17%] text-black">
                        <div className="w-1/2 h-full ">
                            <small>modificado:<time></time></small>
                            
                        </div>
                        <div className="w-1/2 h-full">
                            <small>create:<time></time></small>
                            
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col h-full w-3/4 bg-white min-h-0">
            <div className="h-1/12 w-full bg-blue-400 shrink-0"></div>
            <div className="overflow-y-auto h-[500px] p-2">
              <Editor />
            </div>
          </div>
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
