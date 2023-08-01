import react, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { prisma } from "../api/db";
import { Gi3DStairs } from "react-icons/gi";

export default function BlogPost(props: any) {
  console.log(props.post.imgs[0].location);
  return (
    <div>
      <div
        className={`fixed w-full pt-5 pl-20 ${
          props.light
            ? "bg-gradient-to-b from-zinc-100 to-zinc-300 border-2 border-b-black"
            : "bg-black border-b-2 border-b-white"
        }`}
      >
        <div
          className={`text-xl ${
            props.light ? "text-black" : "text-white"
          } flex flex-row justify-end pr-5`}
        >
          <Link href="/" className={`text-5xl mb-2`}>
            <Gi3DStairs />
          </Link>
        </div>
      </div>
      <div className="h-full w-screen flex flex-row pt-24">
        <div className="w-1/2">
          <Image
            src={props.post.imgs[0].location}
            height={400}
            width={400}
            quality={100}
            alt="blog post splash image"
          />
        </div>
        <div className="w-1/2 pt-10">
          <h1 className="text-7xl displaytxt">{props.post.title}</h1>
        </div>
      </div>

      <div className="p-10 pt-28">
        <p className="p-5">{props.post.body}</p>
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
