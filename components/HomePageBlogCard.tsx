import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePageBlogCard(props: any) {
  // console.log("////// props in blog card", props);
  return (
    <div
      className={`p-5 border-2 my-3 ${
        props.light
          ? "text-black border-black bg-white hover:bg-black hover:text-white"
          : "text-white border-white bg-black hover:bg-white hover:text-black"
      }`}
    >
      <Link href={`/blog/${props.post.id}`} className="flex flex-row p-3">
        <Image
          src={props.post.imgs[0].location}
          height={100}
          width={200}
          alt="blog post img"
          className="p-3"
        />
        <h1 className="text-center p-3">{props.post.title}</h1>
      </Link>
    </div>
  );
}
