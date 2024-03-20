// import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { prisma } from "../lib/db";
import { getAllPosts } from "../lib/staticPostsUtil";
import HomePageProjectCard from "../components/home/HomePageProjectCard";
import HomePageBlogCard from "../components/home/HomePageBlogCard";
import HomePageSplash from "../components/home/HomePageSplash";
import MainNav from "../components/MainNav";
import "../styles/globals.css";

// async function getPosts() {
//   let posts = await prisma.post.findMany({
//     include: { imgs: true },
//   });
//   posts.reverse();
//   posts = JSON.parse(JSON.stringify(posts));
//   return posts;
// }
async function getProjects() {
  let projects = await prisma.project.findMany({
    include: { imgs: true },
  });
  projects.reverse();
  projects = await JSON.parse(JSON.stringify(projects));
  return projects;
}

export default async function Page() {
  const posts = getAllPosts()[0];
  const projects = await getProjects();
  const light = false; // temp stand in for light mode state

  return (
    <div
      className={`h-full overflow-y-hidden ${
        light
          ? "bg-gradient-to-b from-zinc-100 to-zinc-300 text-black"
          : "bg-black text-white"
      }`}
    >
      <MainNav display={false} />
      <HomePageSplash light={light} />
      <div className="lg:h-full w-full flex flex-col md:flex-row pt-5">
        {/* hight is set here and the overflow in the child elements, its not behaving how i want  */}
        <div className="text-5xl text-center p-5 w-full h-full flex md:flex-col">
          <Link href="/blog" className="w-full">
            <h3
              className={`font-raleway w-full border-2 ${
                light ? "text-black border-black" : "text-white border-zinc-200"
              } ${
                light
                  ? "hover:bg-black hover:text-white"
                  : "hover:bg-zinc-300 hover:text-black hover:border-black"
              } p-5  mb-10`}
            >
              Blog
            </h3>
          </Link>
          <div className="overflow-scroll hidden md:block scrollDisplay">
            {posts.map((post: any, i: Number) => {
              return (
                <HomePageBlogCard
                  key={`blog post ${i}`}
                  post={post}
                  light={light}
                />
              );
            })}
          </div>
        </div>
        <div className="text-5xl text-center p-5 w-full h-full flex md:flex-col">
          <Link href="/portfolio" className="w-full">
            <h3
              className={`titletxt border-2 ${
                light ? "text-black border-black" : "text-white border-zinc-200"
              } ${
                light
                  ? "hover:bg-black hover:text-white"
                  : "hover:bg-zinc-300 hover:text-black hover:border-black"
              } p-5 mb-10`}
            >
              Web Portfolio
            </h3>
          </Link>
          <div className="hidden md:block scrollDisplay">
            {projects.map((project: any, i: Number) => {
              return (
                <HomePageProjectCard key={`img ${i}`} img={project.imgs[0]} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
