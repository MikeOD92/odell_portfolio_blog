import "@/styles/globals.css";
import type { AppProps } from "next/app";
import react, { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [light, setlight] = useState(false);

  return (
    <div>
      <div className="absolute" onClick={() => setlight(!light)}>
        <div
          className={`rounded-full w-10 h-10 ${
            light ? "bg-zinc-500" : "bg-zinc-300"
          }`}
        ></div>
      </div>
      <Component {...pageProps} light={light} />;
    </div>
  );
}
