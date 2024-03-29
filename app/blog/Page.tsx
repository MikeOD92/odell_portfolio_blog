import React from "react";
import BlogGridDisplay from "../../components/blog/BlogGridDisplay";
import { getAllPosts } from "../../lib/blogFunctions";

export default async function Page() {
  const posts = await getAllPosts();

  return <BlogGridDisplay posts={posts} />;
}
