import react, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { prisma } from "../api/db";
import { Gi3DStairs } from "react-icons/gi";
import { TfiBackLeft } from "react-icons/tfi";

export default function BlogPost(props: any) {
  console.log(props.post);
  return (
    <div>
      <div
        className={`fixed w-full py-2 pl-20 ${
          props.light
            ? "bg-zinc-300 border-2 border-b-black"
            : "bg-black border-b-2 border-b-white"
        }`}
      >
        <div
          className={`text-xl ${
            props.light ? "text-black" : "text-white"
          } flex flex-row justify-end pr-5`}
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
          <Link
            href="/"
            className={`text-5xl mb-2 ${
              props.light ? "hover:text-blue-400" : "hover:text-lime-400"
            }`}
          >
            <Gi3DStairs />
          </Link>
        </div>
      </div>
      <div
        className={`h-full ${
          props.light ? "bg-zinc-300 text-black" : "bg-black text-white"
        }`}
      >
        <div className="w-screen flex flex-row pt-24">
          <div className="w-full pt-10 text-center">
            <h1 className="text-7xl displaytxt">{props.post.title}</h1>
            <p className="p-5">{props.post.body}</p>
          </div>
        </div>
        <div className="w-full h-1/2 absolute flex justify-items-center">
          <Image
            src={props.post.imgs[0].location}
            fill={true}
            style={{ objectFit: "contain" }}
            quality={100}
            alt="blog post splash image"
          />
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async (context: any) => {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(context.params.id) },
    include: { imgs: true },
  });

  return { props: { post } };
};
