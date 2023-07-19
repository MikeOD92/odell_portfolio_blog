import react, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { prisma } from "../api/db";

export default function BlogPost(props: any) {
  return (
    <div className="p-5 pt-20">
      <h1 className="text-5xl">{props.post.title}</h1>
      <p className="p-5">{props.post.body}</p>
      <Link href="/">H O M E</Link>
    </div>
  );
}
export const getServerSideProps = async () => {
  const post = await prisma.post.findUnique({
    where: { id: 2 },
    // so rightn now we're just getting a fixed post i need to find a way to make this use the
    // url encoded parameter. I think it'll be done with a server.js file and rendering that out
    // so do i use express or something like that?
    include: { imgs: true },
  });

  return { props: { post } };
};
