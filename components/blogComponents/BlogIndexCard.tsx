import React from "react";
import Link from "next/link";

export default function BlogIndexCard(props: any) {
  return (
    <div
      className={`${props.width} ${props.height}  border-2 text-white border-white my-3`}
      style={{
        backgroundImage: `url(${props.post.splash})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Link href={`/blog/${props.post.slug}`}>
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
