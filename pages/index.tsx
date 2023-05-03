import Image from "next/image";
import react, { useState } from "react";
import Link from "next/link";

const Home = (props: any) => {
  let light = props.light;

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full">
        <div
          className={`w-full md:w-1/2 h-screen ${
            light ? "text-black" : "text-white"
          }`}
        >
          <div className="absolute top-1/3 left-24">
            <div
              className={`border-2 ${
                light ? "border-black" : "border-zinc-200"
              } p-5`}
            >
              <h1 className="text-6xl titletxt"> Michael O&apos;Dell</h1>
              <h2 className="text-4xl displaytxt ">Web Developer | Artist</h2>
            </div>
            <p className="pt-5 bodytxt">
              Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum Lorem <br />{" "}
              ispsum Lorem ispsum Lorem ispsum
            </p>
          </div>
        </div>
        <div
          className={`w-full md:w-1/2 ${
            light ? "bg-[url(/img/snowhole2.jpg)]" : "bg-[url(/img/rocks2.jpg)]"
          } bg-cover`}
        ></div>
      </div>
      <div className="h-screen w-full flex flex-row pt-5">
        <div className="text-5xl text-center p-5 w-full h-full flex flex-col">
          <Link href="/blog" className="">
            <h3
              className={`titletxt w-full border-2 ${
                light
                  ? "text-black border-black"
                  : " text-white border-zinc-200"
              } ${
                light
                  ? "hover:bg-black hover:text-white"
                  : "hover:bg-zinc-300 hover:text-black hover:border-black"
              } p-5  mb-10`}
            >
              Blog
            </h3>
          </Link>
        </div>
        <div className="text-5xl text-center p-5 w-full flex flex-col justify-between items-center">
          <Link href="/portfolio" className="w-full">
            <h3
              className={`titletxt border-2 ${
                light ? "text-black border-black" : "text-white border-zinc-200"
              } ${
                light
                  ? "hover:bg-black hover:text-white"
                  : "hover:bg-zinc-300 hover:text-black hover:border-black"
              } p-5  mb-10`}
            >
              Web Portfolio
            </h3>
          </Link>
          <div className="overflow-auto scrollDisplay">
            <Link href="/portfolio" className="w-full">
              <Image
                src="/img/randommansitepic1.png"
                width="2000"
                height="2000"
                alt="portfolio image of randomman.net"
                className="w-full mb-5"
              />
            </Link>
            <Link href="/portfolio" className="w-full">
              <Image
                src="/img/mycositepic1.png"
                width="2000"
                height="2000"
                alt="portfolio image of randomman.net"
                className="w-full my-5"
              />
            </Link>

            <Link href="/portfolio" className="w-full">
              <Image
                src="/img/inglewoodsitepic1.png"
                width="2000"
                height="2000"
                alt="portfolio image of randomman.net"
                className="w-full my-5"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

// export async function getStaticProps(context: any) {
//   return {
//     props: {
//       light: context.light,
//     }, // will be passed to the page component as props
//   };
// }
