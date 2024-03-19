"use client";
import React, { useState, useEffect } from "react";
import { Gi3DStairs } from "react-icons/gi";
import { TfiBackLeft } from "react-icons/tfi";
import Link from "next/link";

export default function BlogNavBar(props: any) {
  const posts = props.posts;
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "") {
      props.setFilterPosts(posts);
    } else {
      props.setFilterPosts(
        posts.filter(
          (post: any) =>
            post.tags.find((ele: any) => ele.tag === filter) !== undefined
        )
      );
    }
  }, [filter, posts, props]);

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
        } flex flex-row justify-end pl-5`}
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
        <div
          className={`text-xl ${
            props.light ? "text-black" : "text-white"
          } flex flex-row lg:justify-end`}
        >
          <div className="w-[100vw] flex flex-row justify-around pt-2">
            <a
              className={`hoverDisplay hidden md:block ${
                filter === "linux" ? "underline decoration-2" : ""
              }`}
              onClick={() => setFilter("linux")}
            >
              Linux
            </a>
            <a
              className={`hoverDisplay hidden md:block ${
                filter === "frontEnd" ? "underline decoration-2" : ""
              }`}
              onClick={() => setFilter("frontEnd")}
            >
              Front End
            </a>
            <a
              className={`hoverDisplay hidden md:block ${
                filter === "backEnd" ? "underline decoration-2" : ""
              }`}
              onClick={() => setFilter("backEnd")}
            >
              Back End
            </a>
            <a
              className={`hoverDisplay hidden md:block ${
                filter === "other" ? "underline decoration-2" : ""
              }`}
              onClick={() => setFilter("other")}
            >
              Other
            </a>
            <a
              className="hoverDisplay hidden md:block"
              onClick={() => setFilter("")}
            >
              All
            </a>
          </div>

          <Link href="/" className={`text-5xl mb-2 mx-5`}>
            <Gi3DStairs />
          </Link>
        </div>
      </div>
    </div>
  );
}
