import "@/styles/globals.css";
import type { AppProps } from "next/app";
import react, { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [light, setlight] = useState(false);

  return (
    <div>
      <button onClick={() => setlight(!light)}> Change mode</button>
      <Component {...pageProps} light={light} />;
    </div>
  );
}
