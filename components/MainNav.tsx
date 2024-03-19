"use client";
import React, { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Gi3DStairs } from "react-icons/gi";
import Link from "next/link";

export default function MainNav(props: any) {
  const display = props.display;
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
    <motion.div
      className="fixed z-20 h-[10vh] w-[100vw] p-5"
      onClick={() => (startAnimation === false ? setlight(!light) : "")}
      animate={
        startAnimation
          ? { opacity: 0, transition: { duration: 0.5 } }
          : { opacity: 100 }
      }
    >
      <div>
        {light ? (
          <BsToggleOff className="text-3xl text-black" />
        ) : (
          <BsToggleOn className="text-3xl text-white" />
        )}
      </div>

      <Link
        href="/"
        className={`${
          display ? "absolute" : "hidden"
        } absolute right-5 top-2 text-5xl p-5${
          light ? "text-black" : "text-white"
        }`}
      >
        <Gi3DStairs />
      </Link>
    </motion.div>
  );
}
