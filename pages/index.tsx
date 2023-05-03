import Image from "next/image";
import react, { useState } from "react";
import Link from "next/link";
import { animate, motion, useScroll } from "framer-motion";

const Home = (props: any) => {
  let light = props.light;
  const { scrollY } = useScroll();

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          className={`w-full h-screen ${light ? "text-black" : "text-white"}`}
          style={{ x: scrollY }}
        >
          <div>
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
        </motion.div>

        <motion.div
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "easeout", duration: 0.4 }}
          style={{ x: scrollY }}
          className={`w-full ${
            light ? "bg-[url(/img/snowhole2.jpg)]" : "bg-[url(/img/rocks2.jpg)]"
          } bg-cover`}
        ></motion.div>
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
            {/* ///  this could easily be a map over get serverside props or static props  */}
            <Link href="/portfolio" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "easeIn", duration: 1.3 }}
              >
                <Image
                  src="/img/randommansitepic1.png"
                  width="2000"
                  height="2000"
                  alt="portfolio image of randomman.net"
                  className="w-full mb-5"
                />
              </motion.div>
            </Link>
            <Link href="/portfolio" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "easeIn", duration: 1.3 }}
              >
                <Image
                  src="/img/mycositepic1.png"
                  width="2000"
                  height="2000"
                  alt="portfolio image of randomman.net"
                  className="w-full my-5"
                />
              </motion.div>
            </Link>

            <Link href="/portfolio" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "easeIn", duration: 1.3 }}
              >
                <Image
                  src="/img/inglewoodsitepic1.png"
                  width="2000"
                  height="2000"
                  alt="portfolio image of randomman.net"
                  className="w-full my-5"
                />
              </motion.div>
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
//     // props: {
//     //   light: context.light,
//     // }, // will be passed to the page component as props
//   };
// }
