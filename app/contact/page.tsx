import React from "react";
import MainNav from "../../components/MainNav";
import Link from "next/link";

export default function Page(props: any) {
  let light = props.light;
  return (
    <div>
      <MainNav display={true} fixed={true} />
      <div
        className={`h-screen w-[100vw] flex flex-col items-center ${
          light
            ? "bg-gradient-to-b from-zinc-100 to-zinc-300 text-black"
            : "bg-black text-white"
        }`}
      >
        <div
          className={`mt-24 px-2 md:px-24 pt-16 w-[90vw] md:w-2/3 ${
            light ? "border-black" : "border-white"
          } border-2`}
        >
          <h2 className="titletxt text-6xl">Contact</h2>
          <ul className="text-4xl tracking-wide leading-relaxed md:leading-loose py-5">
            <li className="displaytxt">
              Email : <br className="lg:hidden" />
              <span className="titletxt text-sm md:text-lg lg:text-xl text-wrap">
                michaelodell660@gmail.com
              </span>
            </li>
            <li>
              <Link href="https://github.com/MikeOD92" className="displaytxt">
                GitHub: <br className="lg:hidden" />
                <span className="titletxt text-sm md:text-lg lg:text-xl text-wrap">
                  github.com/MikeOD92
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/michaelodell92/"
                className="displaytxt"
              >
                LinkedIn: <br className="lg:hidden" />
                <span className="titletxt text-sm md:text-lg lg:text-xl text-wrap">
                  linkedin.com/in/michaelodell92
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/document/d/1A7Ac8PemqpVTycBOeGsvwEzN8aWJRJWRjj3i42YHpeM/edit"
                className="displaytxt"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
