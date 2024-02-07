import "@/styles/globals.css";
import type { AppProps } from "next/app";
import react, { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const [light, setlight] = useState(false);
  const { scrollY } = useScroll();
  const [startAnimation, setStartAnimation] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && startAnimation !== true) {
      setStartAnimation(true);
    } else if (latest <= 100 && startAnimation !== false) {
      setStartAnimation(false);
    }
  });
  return (
    <div
      className={
        light ? "bg-gradient-to-b from-zinc-100 to-zinc-400" : "bg-black"
      }
    >
      <motion.div
        className="fixed z-20"
        onClick={() => (startAnimation === false ? setlight(!light) : "")}
        animate={
          startAnimation
            ? { opacity: 0, transition: { duration: 0.5 } }
            : { opacity: 100 }
        }
      >
        <div className={`w-20 h-20 p-5`}>
          {light ? (
            <BsToggleOff className="text-3xl text-black" />
          ) : (
            <BsToggleOn className="text-3xl text-white" />
          )}
        </div>
      </motion.div>
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
