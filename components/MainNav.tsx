"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Gi3DStairs } from "react-icons/gi";
import { TfiBackLeft } from "react-icons/tfi";

import Link from "next/link";

export default function MainNav(props: any) {
  const display = props.display;
  const fixed = props.fixed;
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
      className={`${fixed ? "fixed" : ""} z-20 h-[10vh] w-[100%] p-5`}
      animate={
        startAnimation
          ? { opacity: 0, transition: { duration: 0.5 } }
          : { opacity: 100 }
      }
    >
      {display ? (
        <Link href="/blog">
          <TfiBackLeft className={`text-4xl`} />
        </Link>
      ) : (
        ""
      )}
      <Link
        href="/"
        className={`absolute right-5 top-2 text-5xl p-5${
          light ? "text-black" : "text-white"
        }`}
      >
        <Gi3DStairs />
      </Link>
    </motion.div>
  );
}
