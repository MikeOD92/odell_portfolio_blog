import type { AppProps } from "next/app";
import react, { useState } from "react";
import { prisma } from "../api/db";

export default function App(props: any) {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className={`displaytxt text-8xl text-lime-500`}>Blog</h1>
        <h3>{props.posts[1].title}</h3>
        <p>{props.posts[1].body}</p>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    include: { imgs: true },
  });

  return { props: { posts } };
};
