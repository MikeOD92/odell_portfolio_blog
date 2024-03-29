"use client";
import React, { useState, useEffect } from "react";
import { Gi3DStairs } from "react-icons/gi";
import Link from "next/link";

export default function BlogNavBar(props: any) {
  const posts = props.posts;
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "") {
      props.setFilterPosts(posts);
    } else {
      props.setFilterPosts(
        posts.filter((post: any) => post.tags.includes(filter))
      );
    }
  }, [filter, posts, props]);

  return (
    <div
      className={`fixed w-[100vw] py-2 pl-20 z-10 bg-black border-b-2 border-b-white`}
    >
      <div className={`text-xl text-white flex flex-row justify-end pl-5`}>
        <div className={`text-xl text-white flex flex-row lg:justify-end`}>
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
