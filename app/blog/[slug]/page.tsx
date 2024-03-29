import React from "react";
import dynamic from "next/dynamic";
import MainNav from "../../../components/MainNav";
import { getPostData } from "../../../lib/blogFunctions";
import { Metadata } from "next";

export async function generateStaticParams() {
  const blogPosts = ["certbot_tutorial"];
  return blogPosts.map((post) => ({
    slug: post,
  }));
}

type BlogPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const metadata = await getPostData(params.slug);
  if (metadata) {
    // console.log(metadata);
    return {
      title: metadata.title,
      description: metadata.summary,
    };
  }
  return {};
}

export default async function Page({ params }: BlogPageProps) {
  const Page = dynamic(() => import("../posts/" + params.slug + ".mdx"));

  return (
    <div>
      <MainNav display={true} fixed={false} />
      <div className="px-2 md:px-10 pt-5">
        <article
          className="prose max-w-fit prose-md md:prose-lg p-5 md:p-20
        bg-slate-300"
        >
          <Page />
        </article>
      </div>
    </div>
  );
}
