import BlogGridDisplay from "../../components/blog/BlogGridDisplay";
import { getAllPosts } from "../../lib/blogFunctions";

export default async function Page(props: any) {
  const posts = await getAllPosts();

  return (
    <div>
      <BlogGridDisplay posts={posts} />
    </div>
  );
}
