"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function BlogPostContainer(props: any) {
  const slug = useParams();
  console.log(slug);
  //   const slug = props.slug;
  //   console.log("slug", slug);
  //   const data = await getPost(slug);
  //   const data = getAllPosts();

  //   console.log("data", data);
  return (
    <div>
      {" "}
      <h3>kajsdbalksjdnba quwyeg asdp;u</h3>
      <h1>BlogPostContainer</h1>
      <h3>kajsdbalksjdnba quwyeg asdp;u</h3>
    </div>
  );
}
