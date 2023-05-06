import type { AppProps } from "next/app";
import react, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Skills from "../../components/skills";
import { Gi3DStairs } from "react-icons/gi";
import Link from "next/link";
import { useScroll, useMotionValueEvent, useInView } from "framer-motion";

export default function Portfolio(props: any) {
  let light = props.light;
  const northRef = useRef(null);
  const southRef = useRef(null);

  const north = useInView(northRef);
  const south = useInView(southRef);

  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    if (!north && south) {
      setFixed(true);
    } else if (north && south) {
      setFixed(false);
    }
  }, [north, south]);

  return (
    <div
      className={`h-full ${
        light ? "bg-gradient-to-b from-zinc-100 to-zinc-300" : "bg-black"
      }`}
    >
      <Link
        href="/"
        className={`absolute right-5 top-2 text-5xl ${
          light ? "text-black" : "text-white"
        }`}
      >
        <Gi3DStairs />
      </Link>

      <div
        className={`flex flex-row ${
          light ? "bg-gradient-to-b from-zinc-100 to-zinc-300" : "bg-black"
        }`}
      >
        <div
          className={`md:w-1/3 md:mt-20 h-100
          ${
            light ? "bg-gradient-to-b from-zinc-100 to-zinc-300" : "bg-black"
          } `}
        >
          <Skills light={light} />
          <div ref={northRef} className="h-0.5 w-0.5" />
          <div
            className={`p-2 ${
              light
                ? " border-2 border-x-black border-t-black text-black"
                : " border-2 border-x-white border-t-white text-white"
            }
            ${
              fixed && light
                ? "fixed top-0 w-1/3 bg-zinc-300"
                : fixed
                ? "fixed top-0 w-1/3"
                : ""
            }`}
          >
            <h3 className="titletxt text-4xl">Contact</h3>
            <br />
            <ul>
              <li className="mt-2">
                <Link href="">Resume</Link>
              </li>
              <li className="mt-2">
                <Link href="mailto:micahelodell660@gmail.com">
                  Email - Michaelodell660@gmail.com
                </Link>
              </li>
              <li className="mt-2">
                <Link href="https://www.linkedin.com/in/michaelodell92/">
                  LinkedIn
                </Link>
              </li>
              <li className="mt-2">
                <Link href="https://github.com/MikeOD92" ref={southRef}>
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute md:left-1/3 md:w-2/3 md:mt-20 flex flex-col">
          {/* this will be a loop and its own compoennet.  */}
          <div
            className={`h-screen w-100 border-2 m-1 ${
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
                randomman.net - E-commerce site for NYC art book publisher,
                built with React, TailwindCSS, Redux, Django, and postgreSQL
              </p>
              <br />
              <p>
                {" "}
                Site visitors are able to view and purchase publications.
                Checkout is facilitated by PayPal. Customers receive an
                automated confirmation email on purchase and later a shipping
                notification with a tracking number provided by the store. Staff
                users have crud functionality with publications, media, orders
                and the text and links in the about and contact pages.
              </p>
            </div>
          </div>
          <div
            className={`h-screen w-100 border-2 m-1 ${
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
                randomman.net - E-commerce site for NYC art book publisher,
                built with React, TailwindCSS, Redux, Django, and postgreSQL
              </p>
              <br />
              <p>
                {" "}
                Site visitors are able to view and purchase publications.
                Checkout is facilitated by PayPal. Customers receive an
                automated confirmation email on purchase and later a shipping
                notification with a tracking number provided by the store. Staff
                users have crud functionality with publications, media, orders
                and the text and links in the about and contact pages.
              </p>
            </div>
          </div>
          <div
            className={`h-screen w-100 border-2 m-1 ${
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
                randomman.net - E-commerce site for NYC art book publisher,
                built with React, TailwindCSS, Redux, Django, and postgreSQL
              </p>
              <br />
              <p>
                {" "}
                Site visitors are able to view and purchase publications.
                Checkout is facilitated by PayPal. Customers receive an
                automated confirmation email on purchase and later a shipping
                notification with a tracking number provided by the store. Staff
                users have crud functionality with publications, media, orders
                and the text and links in the about and contact pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
