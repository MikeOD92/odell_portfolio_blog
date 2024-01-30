import React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
export default function ProjectExpanded(props: any) {
  const light = props.light;

  const handleClick = () => {
    if (props.expanded) {
      props.setProjectNum(0);
      props.setExpanded(!props.expanded);
    } else {
      props.setProjectNum(props.i);
      props.setExpanded(!props.expanded);
    }
  };

  return (
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
        <div className="flex flex-row justify-between">
          <h3 className="displaytxt text-4xl mb-2 ">{props.post.title}</h3>
          <button className="p-25 text-4xl" onClick={() => handleClick()}>
            <IoMdClose />
          </button>
        </div>

        {/* should be a multi img 
              maybe as we build this out we want to make a stand along componenet */}
        <div
          className={`flex flex-row justify-center items-center ${
            light ? "text-black" : "text-white"
          } `}
        >
          <MdChevronLeft className="m-20 text-7xl" />
          <Image
            src={props.post.imgs[0].location}
            width="1000"
            height="1000"
            alt={`portfolio image of ${props.post.title}`}
            className="w-2/3 mb-5 p-30"
          />
          <MdChevronRight className="m-20 text-7xl" />
        </div>

        <p>{props.post.des}</p>
        {props.expanded ? <p>{props.post.body}</p> : ""}
      </div>
    </div>
  );
}
