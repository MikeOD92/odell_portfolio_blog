import react, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { prisma } from "../api/db";
import { Gi3DStairs } from "react-icons/gi";
import { TfiBackLeft } from "react-icons/tfi";
import BlogNavBar from "@/components/BlogNavBar";

export default function BlogPost(props: any) {
  console.log(props.post);
  return (
    <div
      className={`${
        props.light ? "bg-zinc-300 text-black" : "bg-black text-white"
      }`}
    >
      <BlogNavBar light={props.light} />
      <div className="w-full pt-24 text-center">
        <h1 className="text-7xl displaytxt">{props.post.title}</h1>
        <p className="p-5 text-xl">{props.post.des}</p>
        <p>{props.post.createdAt}</p>
      </div>
      <div className="w-full h-screen relative flex justify-items-center">
        <Image
          src={props.post.imgs[0].location}
          fill={true}
          style={{ objectFit: "contain" }}
          quality={100}
          alt="blog post splash image"
          className="px-24 mt-5"
        />
      </div>
      <div>
        <p className="mt-20 mb-10 px-24 text-lg text-justify">
          {props.post.body}
        </p>
        {props.post.imgs[1] && props.post.body1 ? (
          <div className="w-full h-1/4 relative flex flex-column lg:flex-row px-24">
            <div className="w-1/3 h-1/4">
              <Image
                src={props.post.imgs[1].location}
                height={300}
                width={300}
                quality={100}
                alt="blog image"
              />
            </div>
            <p className="w-2/3 text-lg text-justify">{props.post.body1}</p>
          </div>
        ) : props.post.body1 ? (
          <p className="text-lg text-justify px-24">{props.post.body1}</p>
        ) : (
          ""
        )}
      </div>
      <div>
        {props.post.imgs[2] && props.post.body2 ? (
          <div className="w-full h-1/4 relative flex flex-row justify-between py-10 px-24">
            <p className="text-lg">{props.post.body2}</p>
            <div className="w-1/3 h-1/4">
              <Image
                src={props.post.imgs[2].location}
                height={300}
                width={300}
                quality={100}
                alt="blog image"
              />
            </div>
          </div>
        ) : props.post.body2 ? (
          <p className="text-lg">{props.post.body2}</p>
        ) : (
          ""
        )}
      </div>

      {props.post.imgs[3] ? (
        <div className="w-full h-1/4 relative flex justify-items-center">
          <Image
            src={props.post.imgs[3].location}
            fill={true}
            style={{ objectFit: "contain" }}
            quality={100}
            alt="blog image"
            className="px-24"
          />
        </div>
      ) : (
        ""
      )}

      {props.post.body3 ? (
        <p className="my-10 px-24 text-lg">{props.post.body3}</p>
      ) : (
        " "
      )}
      {props.post.imgs[4] ? (
        <div className="w-full h-1/5 relative flex justify-items-center">
          <Image
            src={props.post.imgs[4].location}
            fill={true}
            style={{ objectFit: "contain" }}
            quality={100}
            alt="blog image"
            className="px-24"
          />
        </div>
      ) : (
        ""
      )}
      {props.post.body4 ? (
        <p className="my-10 px-24 text-lg">{props.post.body4}</p>
      ) : (
        " "
      )}
      {props.post.imgs[5] ? (
        <div className="w-full h-1/3 relative flex justify-items-center">
          <Image
            src={props.post.imgs[5].location}
            fill={true}
            style={{ objectFit: "contain" }}
            quality={100}
            alt="blog image"
            className="px-24"
          />
        </div>
      ) : (
        ""
      )}
    </div>
    // </div>
    // </div>
  );
}
export const getServerSideProps = async (context: any) => {
  let post = await prisma.post.findUnique({
    where: { id: parseInt(context.params.id) },
    include: { imgs: true },
  });
  post = JSON.parse(JSON.stringify(post));
  return { props: { post } };
};
