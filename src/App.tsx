import { useState } from "react";
import "./App.css";
import ProductivityCard from "./components/card";
import TypewriterText from "./components/typeWriterText";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen text-white bg-[radial-gradient(ellipse_at_top,_rgba(255,94,0,0.9)_13%,_rgba(139,0,255,0.6)_22%,_black_30%)]">
        <div className="w-full pt-12 pl-12">
          <h1 className="text-5xl font-bold ">Thumboard</h1>
          <p className="text-2xl font-sans tracking-widest pl-1">PERFORMANCE</p>
        </div>
        <div className="flex">
          <div className="w-1/2 pt-32 pl-32 flex flex-col gap-4">
            <h2 className="text-reveal flex flex-col text-5xl">
              <span>Unify Your </span>
              <span>Workflow</span>
              <span>Amplify Your Team</span>
            </h2>
            <TypewriterText />
            <div className="flex items-center">
              <button className=" bg-gradient-to-r from-blue-400 to-purple-600 py-2 px-4 rounded-3xl text-m font-medium cursor-pointer">
                Try The Demo
              </button>
              <a href="#" className="pl-10 font-sans">
                See how it works
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <div className=" bg-white/10 shadow-lg rounded-2xl backdrop-blur-xl mx-auto my-auto pt-4 w-120 ">
              <div className="flex w-2/3 mx-auto items-center justify-center p-1 bg-gradient-to-r from-gray-500/40 to-white/15 rounded-xl">
                <span className="text-2xl text-black bg-white rounded-lg py-0.5 px-2 font-semibold m-2">
                  AI
                </span>
                <p> Consider prioritizing tasks for next week</p>
              </div>
              <div className="grid grid-cols-2 gap-6 p-8">
                <ProductivityCard
                  title="Team Productivity"
                  percentage="87%"
                  change="4.2%"
                  changeDirection="up"
                />
                <ProductivityCard
                  title="Compliance Rate"
                  percentage="87%"
                  change="1.2%"
                  changeDirection="up"
                />
                <ProductivityCard
                  title="Well-being Score"
                  percentage="87%"
                  change="2.3%"
                  changeDirection="down"
                />
                <ProductivityCard
                  title="Bornout Risk"
                  percentage="12%"
                  change="12%"
                  changeDirection="down"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
