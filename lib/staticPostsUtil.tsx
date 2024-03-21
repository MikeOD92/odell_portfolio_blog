import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = "./app/blog/posts/";

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);
  //   console.log(allPosts);
  const list: any = [];
  allPosts.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf8"
    );
    const { data } = matter(fileContents);
    list.unshift(data);
  });

  return list;
}

export function getPost(url: string) {
  const allPosts = fs.readdirSync(contentDirectory);
  let post: any;
  post = allPosts.filter((fileName) => {
    const slug = fileName.replace(".mdx", "");
    if (url === slug) {
      const fileContents = fs.readFileSync(
        path.join(contentDirectory, fileName),
        "utf8"
      );
      const { data } = matter(fileContents);
      post = data;
    }
  });
  console.log(post);
  return post;
}
