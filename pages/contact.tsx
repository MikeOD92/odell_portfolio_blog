import React from "react";
import { Gi3DStairs } from "react-icons/gi";
import Link from "next/link";

export default function contact(props: any) {
  let light = props.light;
  return (
    <div>
      <div
        className={`h-full w-full ${
          light
            ? "bg-gradient-to-b from-zinc-100 to-zinc-300"
            : "bg-black text-white"
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
      </div>
      <div
        className={`h-screen flex flex-col items-center ${
          light
            ? "bg-gradient-to-b from-zinc-100 to-zinc-300 text-black"
            : "bg-black text-white"
        }`}
      >
        <div
          className={`mt-24 px-2 md:px-24 pt-16 w-[90vw] md:w-2/3 ${
            light ? "border-black" : "border-white"
          } border-2`}
        >
          <h2 className="titletxt text-6xl">Contact</h2>
          <ul className="text-4xl tracking-wide leading-relaxed md:leading-loose py-5">
            <li className="displaytxt">
              Email :{" "}
              <span className="titletxt text-2xl text-wrap">
                michaelodell660@gmail.com
              </span>
            </li>
            <li>
              <Link href="https://github.com/MikeOD92" className="displaytxt">
                GitHub:{" "}
                <span className="titletxt text-2xl text-wrap">
                  github.com/MikeOD92
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/michaelodell92/"
                className="displaytxt"
              >
                LinkedIn:{" "}
                <span className="titletxt text-2xl text-wrap">
                  linkedin.com/in/michaelodell92
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/document/d/1A7Ac8PemqpVTycBOeGsvwEzN8aWJRJWRjj3i42YHpeM/edit"
                className="displaytxt"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
