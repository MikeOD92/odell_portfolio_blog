import React from "react";
import { getPost } from "../../../lib/staticPostsUtil";

export default function page(props: any) {
  const post = getPost(props.slug);
  console.log(post);
  return <div>page</div>;
}
