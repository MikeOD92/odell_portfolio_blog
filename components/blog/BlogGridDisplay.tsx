"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogIndexCard from "./BlogIndexCard";
import BlogNavBar from "./BlogNavBar";

export default function BlogGridDisplay(props: any) {
  const posts = props.posts;
  const [filterPosts, setFilterPosts] = useState(posts);

  return (
    <div>
      <BlogNavBar
        posts={posts}
        filterPosts={filterPosts}
        setFilterPosts={setFilterPosts}
      />
      <div
        className="flex flex-col md:flex-row lg:flex-row px-5 pt-24 h-full w-[99.9vw] box-border"
        id="displayContainer"
      >
        <div className="w-full lg:w-1/2 xl:w-3/4 flex flex-col mr-2.5">
          <div
            className={`lg:h-[50vh] my-5 border-2 text-white ${
              props.light ? "border-black" : "border-white"
            }`}
          >
            <h2
              className={`text-5xl md:text-7xl titletxt w-full h-full  text-white p-10`}
            >
              Odd Parts: <br />
              <span className="displaytxt text-2xl md:text-5xl">
                Linux, Web Development, Art & Tech
              </span>
            </h2>
          </div>
          <Link
            href="/blog/about"
            className={`mt-2.5 md:h-[20%] lg:h-[32%] border-2 ${
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
                className={`rounded-full object-contain border-2 bg-none m-2 hidden lg:block ${
                  props.light ? "border-black " : "border-white "
                }`}
              />
            </div>
          </Link>
        </div>
        <div className="mt-2.5 mx-2.5">
          <div className="flex flex-row">
            {filterPosts[0] ? (
              <BlogIndexCard
                post={filterPosts[0]}
                width="hidden md:block w-full md:w-[25vw] mr-5"
                height="h-[25vw]"
                key={`blogPost0`}
              />
            ) : (
              ""
            )}
            {filterPosts[1] ? (
              <BlogIndexCard
                post={filterPosts[1]}
                width="hidden md:block w-full md:w-[25vw] "
                height="h-100"
                key={`blogPost1`}
              />
            ) : (
              ""
            )}
          </div>
          <div className="lg:pt-2.5">
            {filterPosts[2] ? (
              <BlogIndexCard
                post={filterPosts[2]}
                width="hidden md:block w-full md:w-[51.5vw]"
                height="h-[36vh]"
                key={`blogPost1`}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        {/* /// alt display for mobile layout  */}
        <div className="md:hidden flex flex-col">
          {filterPosts.map((itm: any, i: number) => {
            return (
              <BlogIndexCard post={itm} width="w-full" key={`blogPost${i}`} />
            );
          })}
        </div>
        <div></div>
      </div>
      {/* grid display of less recent posts on desktop */}
      <div className="h-auto w-full m-5 hidden md:grid grid-cols-4 auto-rows-[25vw]">
        {filterPosts.slice(3).map((itm: any, i: number) => {
          return (
            <BlogIndexCard
              post={itm}
              width="w-[22.5vw]"
              height="h-[22.5vw]"
              key={`blogPost${i}`}
            />
          );
        })}
      </div>
    </div>
  );
}
