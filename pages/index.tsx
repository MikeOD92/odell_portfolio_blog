import Image from "next/image";
import react, { useState } from "react";

import { FcLinux } from "react-icons/fc";
import { DiAptana } from "react-icons/di";
const Home = (props: any) => {
  // const [light, setlight] = useState(false);
  let light = props.light;
  return (
    <main className={`${light ? "bg-white" : "bg-black"}`}>
      <div className="flex flex-row w-full">
        {/* <button onClick={() => setlight(!light)}> Change mode</button> */}
        <div
          className={`w-1/2 h-screen ${light ? "text-black" : "text-white"}`}
        >
          <div className="absolute top-1/3 left-24">
            <div
              className={`border-2 ${
                light ? "border-black" : "border-zinc-200"
              } p-5`}
            >
              <h1 className="text-6xl"> Michael O&apos;Dell</h1>
              <h2 className="text-4xl displaytxt ">
                Web Developer | Art Prep{" "}
              </h2>
            </div>
            <p className="pt-5">
              Lorem ispsum Lorem ispsum Lorem ispsum Lorem ispsum Lorem <br />{" "}
              ispsum Lorem ispsum Lorem ispsum
            </p>
          </div>
        </div>
        <div
          className={`w-1/2 ${
            light ? "bg-[url(/img/snowhole2.jpg)]" : "bg-[url(/img/rocks2.jpg)]"
          } bg-cover`}
        ></div>
      </div>
      <div className="h-screen w-full flex flex-row pt-20">
        <div className="text-5xl text-center p-5 w-full self-end">
          <h3 className="title">Blog</h3>
        </div>

        <div className="text-5xl text-center p-5 w-full">
          <h3 className="title">Tech Portfolio</h3>
        </div>
      </div>
    </main>
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
