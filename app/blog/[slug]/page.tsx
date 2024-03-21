import React from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import BlogPostContainer from "../../../components/blog/BlogPostContainer";
import { getPost, getAllPosts } from "../../../lib/staticPostsUtil";
import BlogNavBar from "../../../components/blog/BlogNavBar";
import MainNav from "../../../components/MainNav";

export async function generateStaticParams() {
  const blogPosts = ["howto_flask", "sslwithcertbot"];
  return blogPosts.map((post) => ({
    slug: post,
  }));
}

type BlogPageProps = {
  params: { slug: string };
};

export default async function Page({ params }: BlogPageProps) {
  const Page = dynamic(() => import("../posts/" + params.slug + ".mdx"));
  return (
    <div>
      <MainNav display={true} />
      <div className="p-20">
        <Page />
      </div>
    </div>
  );
}
