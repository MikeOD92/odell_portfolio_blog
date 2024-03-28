import BlogGridDisplay from "../../components/blog/BlogGridDisplay";
import { getAllPosts } from "../../lib/blogFunctions";

export default async function Page(props: any) {
  let posts = await getAllPosts();
  let light = props.light;

  return (
    <div>
      <BlogGridDisplay posts={posts} light={light} />
    </div>
  );
}
