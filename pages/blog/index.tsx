import type { AppProps } from "next/app";
import react, { useState, useRef, useEffect } from "react";
import { prisma } from "../api/db";
import { Gi3DStairs } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import BlogIndexCard from "@/components/BlogIndexCard";

export default function App(props: any) {
  const posts = props.posts;
  const [filter, setFilter] = useState("");
  const [showPosts, setShowPosts] = useState(props.posts);

  useEffect(() => {
    if (filter === "") {
      setShowPosts(posts);
    } else {
      setShowPosts(
        posts.filter(
          (post: any) =>
            post.tags.find((ele: any) => ele.tag === filter) !== undefined
        )
      );
    }
  }, [filter, posts]);

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
          <a
            className={`hoverDisplay ${
              filter === "linux" ? "underline decoration-2" : ""
            }`}
            onClick={() => setFilter("linux")}
          >
            Linux
          </a>
          <a
            className={`hoverDisplay ${
              filter === "frontEnd" ? "underline decoration-2" : ""
            }`}
            onClick={() => setFilter("frontEnd")}
          >
            Front End
          </a>
          <a
            className={`hoverDisplay ${
              filter === "backEnd" ? "underline decoration-2" : ""
            }`}
            onClick={() => setFilter("backEnd")}
          >
            Back End
          </a>
          <a
            className={`hoverDisplay ${
              filter === "other" ? "underline decoration-2" : ""
            }`}
            onClick={() => setFilter("other")}
          >
            Other
          </a>
          <a className="hoverDisplay" onClick={() => setFilter("")}>
            All
          </a>

          <Link href="/" className={`text-5xl mb-2`}>
            <Gi3DStairs />
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row px-5 pt-24 h-screen box-border">
        <div className="w-full lg:w-1/2 flex flex-col">
          <div
            className={`lg:h-2/3 mb-5 border-2 text-white ${
              props.light ? "border-black" : "border-white"
            }`}
          >
            <h2
              className={`text-5xl md:text-7xl titletxt w-full h-full  text-white ${
                props.light
                  ? "bg-gradient-to-b from-black/50 to-transparent"
                  : ""
              } p-10`}
            >
              Odd Parts: <br />
              <span className="displaytxt">
                Linux, Web Development, Art & Tech
              </span>
            </h2>
          </div>
          <Link
            href="/blog/about"
            className={`h-1/3 border-2 ${
              props.light
                ? "border-black text-black hover:bg-gradient-to-b hover:from-black/25 hover:to-transparent"
                : "border-white text-white hover:bg-gradient-to-t hover:from-[#4c483e]/50 hover:to-transparent"
            } p-5 flex flex-row justify-between items-center`}
          >
            <h4 className="text-5xl p-5 titletxt">Hello_World</h4>
            <div>
              <Image
                src="/img/odell.jpg"
                alt="author portait"
                width={150}
                height={150}
                className={`rounded-full object-contain border-2 bg-none hidden md:block ${
                  props.light ? "border-black " : "border-white "
                }`}
              />
            </div>
          </Link>
        </div>
        <div className="lg:hidden flex flex-col">
          {showPosts.map((itm: any, i: number) => {
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
        <div className="w-1/2 lg:flex flex-col ml-3 hidden ">
          <div className="flex flex-row h-1/2 mb-5">
            {showPosts[0] ? (
              <BlogIndexCard
                post={showPosts[0]}
                width={"w-full"}
                light={props.light}
              />
            ) : (
              ""
            )}
            {showPosts[1] ? (
              <BlogIndexCard
                post={showPosts[1]}
                width={"w-full"}
                light={props.light}
              />
            ) : (
              ""
            )}
          </div>
          {showPosts[2] ? (
            <BlogIndexCard
              post={showPosts[2]}
              width={"w-100"}
              height={"h-1/2"}
              light={props.light}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="h-screen px-2.5 mt-5 hidden lg:grid grid-cols-4 grid-rows-2 gap-5">
        {showPosts.slice(3).map((itm: any, i: number) => {
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
  let posts = await prisma.post.findMany({
    include: {
      imgs: true,
      tags: { select: { tag: true } },
    },
  });
  posts.reverse();

  posts = JSON.parse(JSON.stringify(posts));

  return { props: { posts } };
};
