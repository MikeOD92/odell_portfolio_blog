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
      <div className="flex flex-row px-5 pt-24 h-screen box-border">
        <div className="w-1/2 flex flex-col">
          <div
            className={`h-2/3 mb-5 border-2 text-white ${
              props.light ? "border-black" : "border-white"
            }`}
          >
            <h2
              className={`text-7xl displaytxt w-full h-full  text-white ${
                props.light
                  ? "bg-gradient-to-b from-black/50 to-transparent"
                  : "bg-gradient-to-t from-[#4c483e]/80 to-transparent"
              } p-10  mb-3`}
            >
              <span className="titletxt"> O&apos;Dell&apos;s</span> <br />
              Linux and Web Development Blog
            </h2>
          </div>
          <Link
            href="/blog/about"
            className={`h-1/3 border-2 ${
              props.light
                ? "border-black text-black hover:bg-black/30"
                : "border-white text-white hover:bg-[#4c483e]/80"
            } p-5 flex flex-row justify-between items-center`}
          >
            <h4 className="text-5xl p-5 titletxt">Hello_World</h4>
            <div>
              <Image
                src="/img/odell.jpg"
                alt="author portait"
                width={150}
                height={150}
                className={`rounded-full object-contain border-2 bg-none ${
                  props.light ? "border-black " : "border-white "
                }`}
              />
            </div>
          </Link>
        </div>
        <div className="w-1/2 flex flex-col ml-3">
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
            <div className="h-1/2">
              <BlogIndexCard
                post={showPosts[2]}
                width={"w-100"}
                height={"h-full"}
                light={props.light}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="h-screen px-2.5 mt-5 grid grid-cols-4 grid-rows-2 gap-5">
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
  const posts = await prisma.post.findMany({
    include: {
      imgs: true,
      tags: { select: { tag: true } },
    },
  });
  posts.reverse();

  return { props: { posts } };
};
