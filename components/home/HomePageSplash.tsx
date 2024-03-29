"use client";
import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function HomePageSplash(props: any) {
  let light = props.light;
  const { scrollY } = useScroll();
  const [startAnimation, setStartAnimation] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 25 && startAnimation !== true) {
      setStartAnimation(true);
    } else if (latest <= 100 && startAnimation !== false) {
      setStartAnimation(false);
    }
  });
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div className={`w-full h-screen ${light ? "text-black" : "text-white"}`}>
        <div>
          <div className="relative top-[12vh] md:absolute top-1/4 md:top-1/3 mx-4 md:mx-5 md:left-24 z-10">
            <motion.div
              animate={
                startAnimation
                  ? {
                      x: 500,
                      transition: { duration: 2 },
                    }
                  : {
                      x: 0,
                      transition: { duration: 1 },
                    }
              }
            >
              <div
                className={`border-2 ${
                  light ? "border-black" : "border-zinc-200"
                } p-3 md:p-5`}
              >
                <h1 className="text-6xl titletxt"> Michael O&apos;Dell</h1>
                <h2 className="text-3xl md:text-4xl displaytxt ">
                  Web Developer | Artist
                </h2>
              </div>
            </motion.div>

            <motion.div
              animate={
                startAnimation
                  ? { x: -500, transition: { duration: 2 } }
                  : { x: 0, transition: { duration: 1 } }
              }
            >
              <Link href="/contact">
                <div
                  className={`w-1/2 sm:w-1/3 mt-5 border-2 ${
                    light
                      ? "border-black hover:bg-black hover:text-white"
                      : "border-zinc-200 hover:bg-white hover:text-black"
                  } p-3 md:p-5`}
                >
                  <p className="text-2xl md:text-3xl titletxt">Contact</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        layout
        animate={
          startAnimation
            ? { opacity: 0, transition: { duration: 2 } }
            : { opacity: 1, transition: { duration: 1 } }
        }
        style={{ x: scrollY }}
        className={`h-screen w-full hidden md:block ${
          light ? "bg-[url(/img/snowhole2.jpg)]" : "bg-[url(/img/rocks2.jpg)]"
        } bg-cover`}
      ></motion.div>
      <motion.div
        className="absolute top-3/4 left-1/3 md:hidden"
        animate={
          startAnimation
            ? { opacity: 0, transition: { duration: 1 } }
            : { opacity: 0.45 }
        }
      >
        <a href="#bottom">
          <BsChevronCompactDown
            className={`text-9xl p-10${
              light ? "text-black border-black" : "text-white"
            }`}
          />
        </a>
      </motion.div>
    </div>
  );
}
