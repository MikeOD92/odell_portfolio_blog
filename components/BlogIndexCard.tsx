import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogIndexCard(props: any) {
  console.log(`BlogIndexCard Props`, props);
  return (
    <div
      className={`${props.width} ${props.height}  border-2 ${
        props.light
          ? `bg-none border-black hover:border-zinc-400  text-black`
          : "bg-none border-white  hover:border-[#4c483e] text-white"
      } ml-3`}
      style={{
        background: `url(${props.post.imgs[0].location}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Link href={`/blog/${props.post.id}`}>
        <h3
          className={`p-5 h-full w-full ${
            props.light ? "bg-zinc-200/50" : "bg-[#4c483e]/50"
          } text-5xl titletxt`}
        >
          {props.post.title}
        </h3>
      </Link>
    </div>
  );
}
