"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Skills from "../../components/portfolio/Skills";
import Projects from "../../components/portfolio/Projects";
import ProjectExpanded from "../../components/portfolio/ProjectExpand";
import { useScroll, useMotionValueEvent, useInView } from "framer-motion";

export default function PorfolioLayout(props: any) {
  const projects = props.projects;
  const northRef = useRef(null);
  const southRef = useRef(null);

  const north = useInView(northRef);
  const south = useInView(southRef);

  const [fixed, setFixed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [projectNum, setProjectNum] = useState(0);

  useEffect(() => {
    if (!north && south) {
      setFixed(true);
    } else if (north && south) {
      setFixed(false);
    } else if (expanded) {
      setFixed(false);
    }
  }, [north, south, expanded]);
  return (
    <div className="w-full flex flex-col-reverse md:flex-row">
      <div
        className={`transition-all ease-in duration-250
    ${
      expanded ? "w-0" : "w-100 md:w-1/3"
    } mx-3 md:mx-0 md:mt-20 h-100 bg-black`}
      >
        <Skills expanded={expanded} />
        <div ref={northRef} className="h-0.05 w-0.05" />
        <div
          className={`transition-all ease-in duration-250 p-2 w-[93vw] md:w-[33.35vw] ${
            expanded ? "hidden" : ""
          } border-2 border-white text-white ${fixed ? "md:fixed top-0" : ""}`}
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
          expanded ? "h-screen md:w-[100vw]" : "w-full"
        } mt-20 px-2`}
        //some how the project column no longer fits correctly, overflow on right hand side
      >
        {expanded && projects ? (
          <ProjectExpanded
            post={projects[projectNum]}
            i={projectNum}
            expanded={expanded}
            setExpanded={setExpanded}
            setProjectNum={setProjectNum}
          />
        ) : (
          projects?.map((post: any, i: Number) => {
            return (
              <Projects
                key={`project${i}`}
                post={post}
                i={i}
                expanded={expanded}
                setExpanded={setExpanded}
                setProjectNum={setProjectNum}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
