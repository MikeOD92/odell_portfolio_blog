import BlogGridDisplay from "../../components/blog/BlogGridDisplay";
import BlogNavBar from "../../components/blog/BlogNavBar";
import { prisma } from "../../lib/db";
import { getAllPosts } from "../../lib/staticPostsUtil";
// import Link from "next/link";
// import Image from "next/image";
// import BlogIndexCard from "../../components/blog/BlogIndexCard";

// async function getPosts() {
//   // let posts = await prisma.post.findMany({
//   //   include: {
//   //     imgs: true,
//   //     tags: { select: { tag: true } },
//   //   },
//   // });
//   // posts.reverse();
//   // posts = await JSON.parse(JSON.stringify(posts));
//   // return posts;
// }

export default async function App(props: any) {
  const posts = getAllPosts();
  console.log(posts);
  let light = props.light;

  return (
    <div>
      <BlogGridDisplay posts={posts} light={light} />
    </div>
  );
}
