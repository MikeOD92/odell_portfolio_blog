import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogIndexCard(props: any) {
  return (
    <div
      className={`${props.width} ${props.height}  border-2 text-white ${
        props.light ? "border-black " : "border-white"
      } my-3 lg:my-0`}
      style={{
        backgroundImage: `url(${props.post.imgs[0].location}`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Link href={`/blog/${props.post.id}`}>
        <h3
          className={`p-5 h-full w-full   ${
            props.light
              ? "bg-black/50 hover:bg-black/20 "
              : "bg-black/50 hover:bg-black/30"
          } text-3xl titletxt`}
        >
          {props.post.title}
        </h3>
      </Link>
    </div>
  );
}
