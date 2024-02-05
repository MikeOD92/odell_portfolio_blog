import react, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { prisma } from "./api/db";
import HomePageProjectCard from "@/components/HomePageProjectCard";
import HomePageBlogCard from "@/components/HomePageBlogCard";

const Home = (props: any) => {
  let light = props.light;
  const { scrollY } = useScroll();
  const [startAnimation, setStartAnimation] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && startAnimation !== true) {
      setStartAnimation(true);
    } else if (latest <= 100 && startAnimation !== false) {
      setStartAnimation(false);
    }
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full overflow-hidden">
        <motion.div
          className={`w-full h-screen ${light ? "text-black" : "text-white"}`}
          animate={
            startAnimation ? { x: 500, transition: { duration: 2 } } : { x: 0 }
          }
        >
          <div>
            <div className="absolute top-1/4 lg:top-1/3 mx-10 lg:left-24">
              <div
                className={`border-2 ${
                  light ? "border-black" : "border-zinc-200"
                } p-5`}
              >
                <h1 className="text-6xl titletxt"> Michael O&apos;Dell</h1>
                <h2 className="text-4xl displaytxt ">Web Developer | Artist</h2>
              </div>
              <p className="pt-5 bodytxt">
                Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum Lorem <br />{" "}
                ispsum Lorem ispsum Lorem ispsum
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          layout
          style={{ x: scrollY }}
          className={`w-full hidden lg:block ${
            light ? "bg-[url(/img/snowhole2.jpg)]" : "bg-[url(/img/rocks2.jpg)]"
          } bg-cover`}
        ></motion.div>
      </div>
      <div className="lg:h-screen w-full flex flex-col md:flex-row pt-5">
        <div className="text-5xl text-center p-5 lg:w-full  h-full flex md:flex-col">
          <Link href="/blog" className="w-full">
            <h3
              className={`titletxt w-full border-2 ${
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
          <div className="overflow-auto hidden md:block scrollDisplay">
            {props.posts.map((post: any, i: Number) => {
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
        <div className="text-5xl text-center p-5 w-full h-full flex flex-col justify-between items-center">
          <Link href="/portfolio" className="w-full">
            <h3
              className={`titletxt border-2 ${
                light ? "text-black border-black" : "text-white border-zinc-200"
              } ${
                light
                  ? "hover:bg-black hover:text-white"
                  : "hover:bg-zinc-300 hover:text-black hover:border-black"
              } p-5  mb-10`}
            >
              Web Portfolio
            </h3>
          </Link>
          <div className="overflow-auto hidden md:block scrollDisplay">
            {props.project.map((project: any, i: Number) => {
              return (
                <HomePageProjectCard key={`img ${i}`} img={project.imgs[0]} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const project = (
    await prisma.project.findMany({
      include: { imgs: true },
    })
  ).reverse();
  let posts = (
    await prisma.post.findMany({
      include: { imgs: true },
    })
  ).reverse();
  posts = JSON.parse(JSON.stringify(posts));

  return { props: { project, posts } };
};
