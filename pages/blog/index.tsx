import type { AppProps } from "next/app";
import react, { useState } from "react";
import { prisma } from "../api/db";
import { Gi3DStairs } from "react-icons/gi";
import Link from "next/link";

export default function App(props: any) {
  return (
    <div>
      <div
        className={`fixed w-full pt-5 pl-20 ${
          props.light
            ? "bg-gradient-to-b from-zinc-100 to-zinc-300 border-2 border-b-black"
            : "bg-black border-b-2 border-b-white"
        }`}
      >
        <div
          className={`text-xl ${
            props.light ? "text-black" : "text-white"
          } flex flex-row justify-around`}
        >
          <a className="hoverDisplay">Linux</a>
          <a className="hoverDisplay">Front End</a>
          <a className="hoverDisplay">Back End</a>
          <a className="hoverDisplay">Arts & Tech</a>
          <a className="hoverDisplay">Books</a>
          <a className="hoverDisplay">DIY</a>

          <Link
            href="/"
            className={`text-5xl mb-2`}
            // absolute right-5 top-2
          >
            <Gi3DStairs />
          </Link>
        </div>

        {/* <div>
        <h1 className={`displaytxt text-8xl text-lime-500`}>Blog</h1>
        <h3>{props.posts[1].title}</h3>
        <p>{props.posts[1].body}</p>
      </div> */}
      </div>
      <div className="flex flex-row p-5 pt-24 h-screen">
        <div className="w-1/2 flex flex-col">
          <div className="h-2/3 mb-5 p-5 bg-[url(/img/moss.jpg)] bg-cover">
            <h2 className={`text-7xl displaytxt text-white mb-3`}>Title</h2>
            <h4 className={`text-4xl titletxt text-white text-center`}>
              Blog Description Blurp
            </h4>
          </div>
          <div
            className={`h-1/3 border-2 ${
              props.light ? "border-black" : "border-white"
            } p-5`}
          >
            <h4
              className={`text-3xl titletxt ${
                props.light ? "text-black" : "text-white"
              }`}
            >
              Perment Link to Inital Post, About me etc...
            </h4>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col ml-3">
          <div className="flex flex-row h-1/2 mb-3">
            <div
              className={`w-1/2 border-2 ${
                props.light ? "border-black" : "border-white"
              } mb-2 ml-3`}
            ></div>
            <div
              className={`w-1/2 border-2 ${
                props.light ? "border-black" : "border-white"
              } mb-2 ml-3 `}
            ></div>
          </div>

          <div
            className={`h-1/2 border-2 ${
              props.light ? "border-black" : "border-white"
            } ml-3`}
          ></div>
        </div>
      </div>
      <div className="h-screen p-3 mt-10 mx-2 grid grid-cols-4 gap-5">
        <div
          className={`w-full border-2 p-5 ${
            props.light ? "border-black" : "border-white"
          }`}
        ></div>
        <div
          className={`w-full border-2 p-5 ${
            props.light ? "border-black" : "border-white"
          }`}
        ></div>
        <div
          className={`w-full border-2 p-5 ${
            props.light ? "border-black" : "border-white"
          }`}
        ></div>
        <div
          className={`w-full border-2 p-5 ${
            props.light ? "border-black" : "border-white"
          }`}
        ></div>
        <div
          className={`w-full border-2 p-5 ${
            props.light ? "border-black" : "border-white"
          }`}
        ></div>
        <div
          className={`w-full border-2 p-5 ${
            props.light ? "border-black" : "border-white"
          }`}
        ></div>
        <div
          className={`w-full border-2 p-5 ${
            props.light ? "border-black" : "border-white"
          }`}
        ></div>
        <div
          className={`w-full border-2 p-5 ${
            props.light ? "border-black" : "border-white"
          }`}
        ></div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    include: { imgs: true },
  });

  return { props: { posts } };
};
