import React from "react";
import Image from "next/image";

export default function Projects(props: any) {
  const light = props.light;

  return (
    <div className="flex flex-col w-2/3 mt-20">
      {props.posts?.map((post: any, i: Number) => {
        // i should make types for these.
        return (
          <a key={`post${i}`} href={`/portfolio/${post.id}`}>
            <div
              className={`h-full my-2 border-2 m-1 ${
                light ? "border-black" : "border-white"
              }`}
            >
              <div
                className={`p-5 round-md h-full ${
                  light ? "text-black bg-zinc-100" : "bg-black"
                }`}
              >
                <h3 className="displaytxt text-4xl mb-2 ">{post.title}</h3>

                {/* should be a multi img 
              maybe as we build this out we want to make a stand along componenet */}

                <Image
                  src={post.imgs[0].location}
                  width="2000"
                  height="2000"
                  alt={`portfolio image of ${post.title}`}
                  className="w-full mb-5"
                />
                <p>{post.des}</p>
                <br />
                <p>{post.body}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
