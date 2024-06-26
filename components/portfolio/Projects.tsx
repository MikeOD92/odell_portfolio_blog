import React from "react";
import Image from "next/image";

export default function Projects(props: any) {
  const handleClick = () => {
    if (props.expanded) {
      props.setProjectNum(0);
      props.setExpanded(!props.expanded);
    } else {
      props.setProjectNum(props.i);
      props.setExpanded(!props.expanded);
      window.scroll(0, 0);
    }
  };

  return (
    <div
      className={`hover:cursor-pointer h-full my-2 border-2 m-1 border-white w-[93vw] md:w-[64.5vw]`}
      onClick={() => handleClick()}
    >
      <div className={`p-5 round-md h-full bg-black`}>
        <h3 className="displaytxt md:text-4xl mb-2 ">{props.post.title}</h3>

        {/* should be a multi img 
              maybe as we build this out we want to make a stand along componenet */}

        <Image
          src={props.post.imgs[0].location}
          width="2000"
          height="2000"
          alt={`${props.post.imgs[0].alt}`}
          className="w-full mb-5"
        />
        <p>{props.post.des}</p>
        {props.expanded ? <p>{props.post.body}</p> : ""}
      </div>
    </div>
  );
}
