import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePageBlogCard(props: any) {
  console.log("////// props in blog card", props);
  return (
    <div className="p-5 hover:bg-lime-500">
      <Link href={`/blog/${props.post.id}`}>
        <h1>{props.post.title}</h1>
      </Link>
    </div>
  );
}
