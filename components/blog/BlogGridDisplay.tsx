"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogIndexCard from "./BlogIndexCard";
import BlogNavBar from "./BlogNavBar";

export default function BlogGridDisplay(props: any) {
  let light = props.light;
  const posts = props.posts;
  const [filterPosts, setFilterPosts] = useState(posts);
  return (
    <div>
      <BlogNavBar
        posts={posts}
        filterPosts={filterPosts}
        setFilterPosts={setFilterPosts}
      />
      <div className="flex flex-col lg:flex-row px-5 pt-24 h-full w-[100vw] box-border">
        <div className="w-full lg:w-1/2 xl:w-3/4 flex flex-col">
          <div
            className={`lg:h-2/3 my-5 border-2 text-white ${
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
              <span className="displaytxt text-2xl md:text-5xl">
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
            <h4 className="text-3xl md:text-5xl p-5 titletxt">Hello_World</h4>
            <div>
              <Image
                src="/img/odell.jpg"
                alt="author portait"
                width={150}
                height={150}
                className={`rounded-full object-contain border-2 bg-none m-2 hidden md:block ${
                  props.light ? "border-black " : "border-white "
                }`}
              />
            </div>
          </Link>
        </div>
        <BlogIndexCard
          post={posts[0]}
          width="w-full"
          key={`blogPost${0}`}
          light={light}
        />
        {/* <div className="lg:hidden flex flex-col">
          {filterPosts.map((itm: any, i: number) => {
            return (
              <BlogIndexCard
                post={itm}
                width="w-full"
                key={`blogPost${i}`}
                light={light}
              />
            );
          })}
        </div>
        <div className="w-1/2 lg:flex flex-col ml-3 hidden my-5">
          <div className="flex flex-row h-1/2 mb-5">
            {filterPosts[0] ? (
              <BlogIndexCard
                post={filterPosts[0]}
                width={"w-1/2 mr-3"}
                light={light}
              />
            ) : (
              ""
            )}
            {filterPosts[1] ? (
              <BlogIndexCard
                post={filterPosts[1]}
                width={"w-1/2"}
                light={light}
              />
            ) : (
              ""
            )}
          </div>
          {filterPosts[2] ? (
            <BlogIndexCard
              post={filterPosts[2]}
              width={"w-100"}
              height={"h-1/2"}
              light={light}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="h-screen w-100 px-5 mt-5 hidden lg:grid grid-cols-4 auto-rows-[20vw] gap-5">
        {filterPosts.slice(3).map((itm: any, i: number) => {
          return (
            <BlogIndexCard
              post={itm}
              width="w-100"
              key={`blogPost${i}`}
              light={props.light}
            />
          );
        })} */}
      </div>
    </div>
  );
}
