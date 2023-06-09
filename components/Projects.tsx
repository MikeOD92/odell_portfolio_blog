import React from "react";
import Image from "next/image";
import { prisma } from "../pages/api/db";

export default function Projects(props: any) {
  const light = props.light;
  console.log("look at the posts");
  console.log(props.posts);
  return (
    <div className="flex flex-col w-2/3 mt-20">
      {/* this will be a loop and its own compoennet.  */}
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
          <h3 className="displaytxt text-4xl mb-2 ">
            Random Man Editions - Randomman.net
          </h3>
          {/* should be a multi img */}

          <Image
            src="/img/randommansitepic1.png"
            width="2000"
            height="2000"
            alt="portfolio image of randomman.net"
            className="w-full mb-5"
          />

          <p className="">
            randomman.net - E-commerce site for NYC art book publisher, built
            with React, TailwindCSS, Redux, Django, and postgreSQL
          </p>
          <br />
          <p>
            {" "}
            Site visitors are able to view and purchase publications. Checkout
            is facilitated by PayPal. Customers receive an automated
            confirmation email on purchase and later a shipping notification
            with a tracking number provided by the store. Staff users have crud
            functionality with publications, media, orders and the text and
            links in the about and contact pages.
          </p>
        </div>
      </div>
      <div
        className={`h-full w-100 border-2 m-1 ${
          light ? "border-black" : "border-white"
        }`}
      >
        <div
          className={`p-5 round-md h-full ${
            light ? "text-black bg-zinc-100" : "bg-black"
          }`}
        >
          <h3 className="displaytxt text-4xl mb-2 ">
            Random Man Editions - Randomman.net
          </h3>
          {/* should be a multi img */}
          <Image
            src="/img/inglewoodsitepic1.png"
            width="2000"
            height="2000"
            alt="portfolio image of randomman.net"
            className="w-full mb-5"
          />
          <p className="">
            randomman.net - E-commerce site for NYC art book publisher, built
            with React, TailwindCSS, Redux, Django, and postgreSQL
          </p>
          <br />
          <p>
            {" "}
            Site visitors are able to view and purchase publications. Checkout
            is facilitated by PayPal. Customers receive an automated
            confirmation email on purchase and later a shipping notification
            with a tracking number provided by the store. Staff users have crud
            functionality with publications, media, orders and the text and
            links in the about and contact pages.
          </p>
        </div>
      </div>
      <div
        className={`h-full w-100 border-2 m-1 ${
          light ? "border-black" : "border-white"
        }`}
      >
        <div
          className={`p-5 round-md h-full ${
            light ? "text-black bg-zinc-100" : "bg-black"
          }`}
        >
          <h3 className="displaytxt text-4xl mb-2 ">
            Random Man Editions - Randomman.net
          </h3>
          {/* should be a multi img */}
          <Image
            src="/img/mycositepic1.png"
            width="2000"
            height="2000"
            alt="portfolio image of randomman.net"
            className="w-full mb-5"
          />
          <p className="">
            randomman.net - E-commerce site for NYC art book publisher, built
            with React, TailwindCSS, Redux, Django, and postgreSQL
          </p>
          <br />
          <p>
            {" "}
            Site visitors are able to view and purchase publications. Checkout
            is facilitated by PayPal. Customers receive an automated
            confirmation email on purchase and later a shipping notification
            with a tracking number provided by the store. Staff users have crud
            functionality with publications, media, orders and the text and
            links in the about and contact pages.
          </p>
        </div>
      </div>
      <div
        className={`h-full w-100 border-2 m-1 ${
          light ? "border-black" : "border-white"
        }`}
      >
        <div
          className={`p-5 round-md h-full ${
            light ? "text-black bg-zinc-100" : "bg-black"
          }`}
        >
          <h3 className="displaytxt text-4xl mb-2 ">
            Random Man Editions - Randomman.net
          </h3>
          {/* should be a multi img */}
          <Image
            src="/img/randommansitepic2.png"
            width="2000"
            height="2000"
            alt="portfolio image of randomman.net"
            className="w-full mb-5"
          />
          <p className="">
            randomman.net - E-commerce site for NYC art book publisher, built
            with React, TailwindCSS, Redux, Django, and postgreSQL
          </p>
          <br />
          <p>
            {" "}
            Site visitors are able to view and purchase publications. Checkout
            is facilitated by PayPal. Customers receive an automated
            confirmation email on purchase and later a shipping notification
            with a tracking number provided by the store. Staff users have crud
            functionality with publications, media, orders and the text and
            links in the about and contact pages.
          </p>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const posts = await prisma.projects.findMany();

  return { props: { posts } };
};
