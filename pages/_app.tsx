import "@/styles/globals.css";
import type { AppProps } from "next/app";
import react, { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

export default function App({ Component, pageProps }: AppProps) {
  const [light, setlight] = useState(false);

  return (
    <div>
      <div className="absolute" onClick={() => setlight(!light)}>
        <div className={`w-20 h-20 p-5`}>
          {light ? (
            <BsToggleOff className="text-3xl text-black" />
          ) : (
            <BsToggleOn className="text-3xl text-white" />
          )}
        </div>
      </div>
      <main
        className={
          light ? "bg-gradient-to-b from-zinc-100 to-zinc-400" : "bg-black"
        }
      >
        <Component {...pageProps} light={light} />
      </main>
    </div>
  );
}
