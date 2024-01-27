import React from "react";
import { Gi3DStairs } from "react-icons/gi";
import { TfiBackLeft } from "react-icons/tfi";
import Link from "next/link";

export default function BlogNavBar(props: any) {
  return (
    <div
      className={`fixed w-full py-2 pl-20 z-10 ${
        props.light
          ? "bg-zinc-300 border-2 border-b-black"
          : "bg-black border-b-2 border-b-white"
      }`}
    >
      <div
        className={`text-xl ${
          props.light ? "text-black" : "text-white"
        } flex flex-row justify-end pr-5`}
      >
        <Link
          href="/blog"
          className={`mr-3 p-2 self-center  
        ${
          props.light
            ? "bg-none hover:bg-black hover:border-white text-black hover:text-white"
            : "bg-black hover:bg-white hover:border-black text-white hover:text-black"
        }
        `}
        >
          <TfiBackLeft className={`text-4xl `} />
        </Link>
        <Link href="/" className="text-5xl mb-2">
          <Gi3DStairs />
        </Link>
      </div>
    </div>
  );
}
