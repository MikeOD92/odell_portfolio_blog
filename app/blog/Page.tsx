import BlogGridDisplay from "../../components/blog/BlogGridDisplay";
import { getAllPosts } from "../../lib/blogFunctions";

export default async function App(props: any) {
  let posts = await getAllPosts();
  // posts = posts.reverse();
  let light = props.light;

  return (
    <div>
      <BlogGridDisplay posts={posts} light={light} />
    </div>
  );
}
