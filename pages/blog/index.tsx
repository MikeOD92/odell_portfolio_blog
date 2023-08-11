import type { AppProps } from "next/app";
import react, { useState } from "react";
import { prisma } from "../api/db";
import { Gi3DStairs } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import BlogIndexCard from "@/components/BlogIndexCard";

export default function App(props: any) {
  return (
    <div>
      <div
        className={`fixed w-full pt-5 pl-20 ${
          props.light
            ? "bg-zinc-200 border-2 border-b-black"
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
      <div className="flex flex-row p-5 pt-24 h-screen box-border">
        <div className="w-1/2 flex flex-col">
          <div
            className={`h-2/3 mb-5 border-2 text-white ${
              props.light ? "border-black" : "border-white"
            }`}
          >
            <h2
              className={`text-7xl displaytxt w-full h-full  text-white bg-gradient-to-b from-black/50 to-transparent p-10  mb-3`}
            >
              <span className="titletxt"> O&apos;Dell&apos;s</span> <br />
              Linux and Web Development Blog
            </h2>
          </div>
          <Link
            href="/blog/about"
            className={`h-1/3 border-2 ${
              props.light
                ? "border-black hover:border-zinc-400 text-black"
                : "border-white   hover:border-[#4c483e] text-white "
            } p-5 flex flex-row justify-between items-center`}
            // style={{
            //   background: "url(/img/lichen.jpg)",
            //   backgroundPosition: "top left",
            //   backgroundSize: "160%",
            // }}
          >
            <h4 className="text-5xl p-5 titletxt">Hello_World</h4>
            <div>
              <Image
                src="/img/odell.jpg"
                alt="author portait"
                width={150}
                height={150}
                className={`rounded-full object-contain border-2 ${
                  props.light ? "border-black" : "border-[#4c483e]"
                }`}
              />
            </div>
          </Link>
        </div>
        <div className="w-1/2 flex flex-col ml-3">
          <div className="flex flex-row h-1/2 mb-5">
            {/* //grid grid-cols-2 gap-2 mb-5 h-1/2 */}
            {/* <BlogIndexCard
              post={props.posts[0]}
              width={"w-full"}
              light={props.light}
            />
            <BlogIndexCard
              post={props.posts[1]}
              width={"w-full"}
              light={props.light}
            /> */}
          </div>
          <div className="h-1/3">
            {/* <BlogIndexCard
              post={props.posts[2]}
              width={"w-100"}
              height={"h-full"}
              light={props.light}
            /> */}
          </div>
        </div>
      </div>
      <div className="h-screen p-3 mt-10 mx-2 grid grid-cols-4 grid-rows-2 gap-5">
        {props.posts.map((itm: any, i: number) => {
          return (
            <BlogIndexCard
              post={itm}
              width="w-full"
              key={`blogPost${i}`}
              light={props.light}
            />
          );
        })}
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    include: {
      imgs: true,
      tags: { select: { tagName: true } },
    },
  });
  posts.reverse();

  return { props: { posts } };
};
