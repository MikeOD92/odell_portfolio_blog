/**
 * Import an mdx blog post file and return the metadata.
 * @param slug
 * @returns
 */

type Post = {
  title: string;
  summary: string;
  splash: string;
  slug: string;
  date: string;
  tags: string[];
};
import * as fs from "fs";

export async function getPostData(slug: string): Promise<Post> {
  try {
    const file = await import("@/blog/posts/" + slug + ".mdx");

    if (file?.metadata) return file.metadata;
    else {
      throw new Error(`Unable to find metadata in file ${slug}.mdx`);
    }
  } catch (error: any) {
    console.log(error?.message);
    return {
      title: "",
      summary: "",
      splash: "",
      slug: "",
      date: "",
      tags: [],
    };
  }
}
export async function getAllPosts(): Promise<Post[]> {
  try {
    const allPosts: string[] = fs.readdirSync("./app/blog/posts/", "utf8");
    // console.log(allPosts);
    const output: Post[] = [];

    if (allPosts.length > 0) {
      const data = allPosts.map(async (file) => {
        const post = await getPostData(file.split(".")[0]);
        output.unshift(post);
      });
      return output;
    }
  } catch (err) {
    console.error(err);
    return [];
  }

  return [];
}
