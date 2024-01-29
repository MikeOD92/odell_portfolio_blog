import type { AppProps } from "next/app";
import react, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Skills from "../../components/Skills";
import Projects from "@/components/Projects";
import { Gi3DStairs } from "react-icons/gi";
import Link from "next/link";
import { useScroll, useMotionValueEvent, useInView } from "framer-motion";
import { prisma } from "../api/db";

export default function Portfolio(props: any) {
  let light = props.light;
  const northRef = useRef(null);
  const southRef = useRef(null);

  const north = useInView(northRef);
  const south = useInView(southRef);

  const [fixed, setFixed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // const [projectNum, setProjectNum] = useState(0);

  // const handleExpansion = (e: Event, i: Number) => {
  //   e.preventDefault();
  //   // setProjectNum(i);
  //   setExpanded(true);
  // };
  useEffect(() => {
    if (!north && south) {
      setFixed(true);
    } else if (north && south) {
      setFixed(false);
    } else if (expanded) {
      setFixed(false);
    }
  }, [north, south]);

  return (
    <div
      className={`h-full ${
        light ? "bg-gradient-to-b from-zinc-100 to-zinc-300" : "bg-black"
      }`}
    >
      <Link
        href="/"
        className={`absolute right-5 top-2 text-5xl ${
          light ? "text-black" : "text-white"
        }`}
      >
        <Gi3DStairs />
      </Link>

      <div
        className={`flex flex-row ${
          light ? "bg-gradient-to-b from-zinc-100 to-zinc-300" : "bg-black"
        }`}
      >
        <div className="w-full flex flex-row">
          <div
            className={`transition-all ease-in duration-250 ${
              expanded ? "w-0" : "w-1/3"
            } mt-20 h-100
          
          ${
            light ? "bg-gradient-to-b from-zinc-100 to-zinc-300" : "bg-black"
          } `}
          >
            <Skills light={light} expanded={expanded} />
            <div ref={northRef} className="h-0.5 w-0.5" />
            <div
              className={`
              transition-all ease-in duration-250 p-2 
              ${expanded ? "hidden" : ""}
              ${
                light
                  ? " border-2 border-black text-black"
                  : " border-2 border-white text-white"
              }
            ${
              fixed && light
                ? "fixed top-0 w-1/3 bg-zinc-300"
                : fixed
                ? "fixed top-0 w-1/3"
                : ""
            }`}
            >
              <h3 className="titletxt text-4xl">Contact</h3>
              <br />
              <ul>
                <li className="mt-2">
                  <Link href="">Resume</Link>
                </li>
                <li className="mt-2">
                  <Link href="mailto:micahelodell660@gmail.com">
                    Email - Michaelodell660@gmail.com
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="https://www.linkedin.com/in/michaelodell92/">
                    LinkedIn
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="https://github.com/MikeOD92" ref={southRef}>
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`flex flex-col transition-all ease-in duration-250 ${
              expanded ? "w-full" : "w-2/3"
            } mt-20 mx-2`}
          >
            {props.posts?.map((post: any, i: Number) => {
              return (
                <Projects
                  key={`project${i}`}
                  post={post}
                  i={i}
                  light={props.light}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  // setProjectNum={setProjectNum}
                />
              );
            })}
            {/* {!expanded ? (
              props.posts?.map((post: any, i: Number) => {
                return (
                  <Projects
                    key={`project${i}`}
                    post={post}
                    i={i}
                    light={props.light}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    setProjectNum={setProjectNum}
                  />
                );
              })
            ) : (
              <Projects
                post={props.posts[projectNum]}
                light={props.light}
                expanded={expanded}
                setExpanded={setExpanded}
                setProjectNum={setProjectNum}
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const posts = await prisma.project.findMany({
    include: { imgs: true },
  });

  return { props: { posts } };
};
