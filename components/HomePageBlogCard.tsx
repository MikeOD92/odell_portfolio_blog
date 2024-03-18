"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import Image from "next/image";

export default function HomePageBlogCard(props: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "easeIn", duration: 1.3 }}
    >
      <div
        className={`mb-3 text-white bg-black`}
        style={{
          backgroundImage: `url(${props.post.imgs[0].location})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <Link href={`/blog/${props.post.id}`}>
          <h1
            className={`text-center h-full w-full ${
              props.light
                ? "bg-black/20 hover:bg-black/50 "
                : "bg-black/50 hover:bg-black/20"
            } p-10`}
          >
            {props.post.title}
          </h1>
        </Link>
      </div>
    </motion.div>
  );
}
