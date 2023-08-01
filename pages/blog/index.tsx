import type { AppProps } from "next/app";
import react, { useState } from "react";
import { prisma } from "../api/db";
import { Gi3DStairs } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

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

          <Link href="/" className={`text-5xl mb-2`}>
            <Gi3DStairs />
          </Link>
        </div>
      </div>
      <div className="flex flex-row p-5 pt-24 h-screen">
        <div className="w-1/2 flex flex-col">
          <div
            className={`h-2/3 mb-5 p-5 bg-[url(/img/fence.jpg)] bg-cover border-2 ${
              props.light ? "border-black" : "border-white"
            }`}
          >
            <h2 className={`text-7xl displaytxt text-white mb-3`}>
              O&apos;Dell&apos;s Linux and Tech Blog
            </h2>
            {/* <h4 className={`text-4xl titletxt text-white text-center`}>
              
            </h4> */}
          </div>
          <div
            className={`h-1/3 border-2 ${
              props.light ? "border-black" : "border-white"
            } p-5 flex flex-row justify-between items-center`}
          >
            <h4
              className={`text-5xl titletxt ${
                props.light ? "text-black" : "text-white"
              }`}
            >
              About Me
            </h4>
            <div>
              <Image
                src="/img/odell.jpg"
                alt="author portait"
                width={150}
                height={150}
                className="rounded-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col ml-3">
          <div className="flex flex-row h-1/2 mb-3">
            <Link
              className={`w-1/2 border-2 ${
                props.light ? "border-black" : "border-white"
              } mb-2 ml-3 p-5`}
              href={`/blog/${props.posts[0].id}`}
            >
              <h3
                className={`${
                  props.light ? "text-black" : "text-white"
                } text-4xl titletxt m-2`}
              >
                {props.posts[0].title}
              </h3>
              <Image
                src={props.posts[0].imgs[0].location}
                height={200}
                width={200}
                alt="blogimg"
              />
            </Link>

            <Link
              className={`w-1/2 border-2 ${
                props.light ? "border-black" : "border-white"
              } mb-2 ml-3 p-5`}
              href={`/blog/${props.posts[1].id}`}
            >
              <h3
                className={`${
                  props.light ? "text-black" : "text-white"
                } text-4xl titletxt`}
              >
                {props.posts[1].title}
              </h3>
              <Image
                src={props.posts[1].imgs[0].location}
                height={200}
                width={200}
                alt="blogimg"
              />
            </Link>
          </div>

          <Link
            className={`h-1/2 border-2 ${
              props.light ? "border-black" : "border-white"
            } ml-3 p-5`}
            href={`/blog/${props.posts[2].id}`}
          >
            <h3
              className={`${
                props.light ? "text-black" : "text-white"
              } text-4xl titletxt`}
            >
              {props.posts[2].title}
            </h3>
            <Image
              src={props.posts[1].imgs[0].location}
              height={200}
              width={200}
              alt="blogimg"
            />
          </Link>
        </div>
      </div>
      <div className="h-screen p-3 mt-10 mx-2 grid grid-cols-4 grid-rows-2 gap-5">
        {props.posts.slice(3).map((itm: any, i: number) => {
          return (
            <Link
              key={`${itm.title} ${i}`}
              href={`/blog/${itm.id}`}
              className={`h-full border-2 ${
                props.light ? "border-black" : "border-white"
              } ml-3 p-5`}
            >
              <h3
                className={`text-4xl px-3 pb-3 text-center ${
                  props.light ? "text-black" : "text-white"
                } titletxt`}
              >
                {itm.title}
              </h3>
              <Image
                src={itm.imgs[0].location}
                height={200}
                width={200}
                alt="blogimg"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    include: { imgs: true },
  });
  posts.reverse();

  return { props: { posts } };
};
