import react, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { prisma } from "../api/db";
import { Gi3DStairs } from "react-icons/gi";

export default function about(props: any) {
  return (
    <div>
      <div
        className={`fixed w-full py-2 pl-20 ${
          props.light
            ? "bg-gradient-to-b from-zinc-100 to-zinc-300 border-2 border-b-black"
            : "bg-black border-b-2 border-b-white"
        }`}
      >
        <div
          className={`text-xl ${
            props.light ? "text-black" : "text-white"
          } flex flex-row justify-end pr-5`}
        >
          <Link
            href="/blog"
            className={`mr-3 p-2 border-2 self-center ${
              props.light
                ? "bg-none border-black hover:bg-black hover:border-white text-black hover:text-white"
                : "bg-black border-white hover:bg-white hover:border-black text-white hover:text-black"
            }`}
          >
            Back
          </Link>
          <Link href="/" className={`text-5xl mb-2`}>
            <Gi3DStairs />
          </Link>
        </div>
      </div>
      <div
        className={`h-screen w-full p-10 pt-24 ${
          props.light ? "text-black" : "text-white"
        }`}
      >
        {" "}
        <div className="flex flex-row mb-5">
          <h1 className="titletxt text-7xl w-full">
            About Me _ <span className="displaytxt">Hello World</span>
          </h1>
          <Image
            src="/img/odell.jpg"
            height="300"
            width="300"
            alt="author portrait"
            className="rounded-full"
          />
        </div>
        <div
          className={`p-5 border-2 ${
            props.light ? "border-black" : "border-white"
          } text-md`}
        >
          <p>
            Hello, welcome to my yet unnamed blog and thank you for clicking on
            the about me post.
          </p>
          <br />
          <p>
            My name is O&apos;Dell and I am a web developer, Linux enthusiast,
            and artist. In my free time I am an avid hiker, climber and cyclist
            and I love making things. I have a background in the arts and
            achieved my BFA from CUNY Hunter College in NYC in 2015 with a focus
            in video and sculpture. After this I spent a good 5 months hiking
            the 2650 mile Pacific Crest Trail from Mexico to Canada and in 2018
            I hit the trails again to hike the Pacific Northwest Trail 1200
            miles from the Montana Rockies to the Washington coast. I settled in
            Seattle for a few years and during the Covid19 pandemic from October
            20&apos; - April 21&apos; attended General Assembly&apos;s Software
            Engineering Immersive bootcamp. During this time and since I&apos;ve
            dove head first into web development and linux and will be sharing
            my self guided learning journey here.
          </p>
          <br />
          <p>
            The focus of this blog will be tech and tech related topics as I
            learn and explore new things I will be writing about things that
            interest me and creating tutorials. I&apos;ll be taking about things
            like software packages I&apos;m using, developing with NextJS,
            Python programing, I&apos;ll do some Linux distro reviews, I&apos;ll
            do an in-depth Arch install tutorial, and I&apos;ll talk about
            running web servers and other services on linux machines. I will
            mostly use RedHat CentOS and maybe NixOS for running services and
            focus on Arch based distros for going into gaming and running a
            daily driver / development environment.
          </p>
          <br />
          <p>Some of my upcoming projects I will be writing about include:</p>
          <br />
          <ul className="list-disc pl-5">
            <li>
              moving this website over to a fully self hosted linux setup.
            </li>
            <li>
              Building an automated mushroom fruiting chamber with some friends
              that will include humidity sensors, some raspberry pi ( my first
              toe dipping into IoT stuff ) and some carpentry.
            </li>
            <li>building myself a new PC</li>
            <li>
              Building a at home cloud storage server using SFTP and maybe a
              docker program to use as a client.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
