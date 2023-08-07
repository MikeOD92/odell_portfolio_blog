import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogIndexCard(props: any) {
  return (
    <Link
      className={`${props.width} ${props.height} border-2 ${
        props.light
          ? "bg-none border-black hover:border-yellow-600  text-black "
          : "bg-black border-white  hover:border-[#4c483e] text-white"
      } ml-3`}
      href={`/blog/${props.post.id}`}
    >
      <div className={`p-2 ${props.light ? "bg-zinc-300" : "bg-[#4c483e]"}`}>
        <h3 className="text-4xl titletxt m-2">{props.post.title}</h3>
      </div>
      {/* <div
        className="relative"
        // style={
        //   props
        //     ? {
        //         background: `url(${props.post.imgs[0].location}`,
        //       }
        //     : {}
        // }
      > */}
      <Image
        src={props.post.imgs[0].location}
        height={200}
        width={200}
        alt="blogimg"
      />
      {/* </div> */}
    </Link>
  );
}
