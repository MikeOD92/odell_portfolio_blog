import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogIndexCard(props: any) {
  return (
    <Link
      className={`${props.width} ${props.height ? props.height : ""} border-2 ${
        props.light
          ? "bg-none border-black hover:bg-black hover:border-white text-black hover:text-white"
          : "bg-black border-white hover:bg-white hover:border-black text-white hover:text-black"
      } ml-3 p-5`}
      href={`/blog/${props.post.id}`}
    >
      <h3 className="text-4xl titletxt m-2">{props.post.title}</h3>
      <Image
        src={props.post.imgs[0].location}
        height={200}
        width={200}
        alt="blogimg"
      />
    </Link>
  );
}
