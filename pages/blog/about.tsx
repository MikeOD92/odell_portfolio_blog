import Image from "next/image";
import BlogNavBar from "@/components/BlogNavBar";
export default function about(props: any) {
  return (
    <div>
      <BlogNavBar light={props.light} />
      <div
        className={`h-full w-full p-5 md:p-10 pt-20 ${
          props.light ? "text-black" : "text-white"
        }`}
      >
        {" "}
        <div className="flex flex-col md:flex-row mt-24 mb-5">
          <h1 className="titletxt text-7xl w-full">
            About Me _ <span className="displaytxt">Hello World</span>
          </h1>
          <Image
            src="/img/odell.jpg"
            height="300"
            width="300"
            alt="author portrait"
            className="rounded-full p-10 md:p-0"
          />
        </div>
        <div
          className={`p-5 lg:p-20 text-md ${
            props.light
              ? "text-slate-700 bg-zinc-200"
              : "text-zinc-200 bg-[#4c483e]"
          } rounded-r-2xl mb-5`}
        >
          <h2 className="text-xl md:text-2xl">
            Hello, welcome to my yet unnamed blog and thank you for clicking on
            the about me post.
          </h2>
          <br />
          <br />
          <p>
            My name is O&apos;Dell and I am a web developer, Linux enthusiast,
            and artist. In my free time I am an avid hiker, climber and cyclist
            and I love making things. I have a background in the arts and
            achieved my BFA from CUNY Hunter College in NYC in 2015 with a focus
            in video and sculpture. After this I spent a good 5 months hiking
            the 2650 mile Pacific Crest Trail from Mexico to Canada, in 2018 I
            hit the trails again to hike the Pacific Northwest Trail, 1200 miles
            from the Montana Rockies to the Washington coast. I settled in
            Seattle for a few years and during the Covid 19 pandemic from
            October 20&apos; - April 21&apos; attended General Assembly&apos;s
            Software Engineering Immersive bootcamp. During this time and since
            I&apos;ve dove head first into web development and linux and will be
            sharing my self guided learning journey here.
          </p>
          <br />
          <p>
            The focus of this blog will be on tech and tech related topics as I
            learn and explore new things. I will be writing about my projects,
            things that interest me and creating tutorials. I&apos;ll be taking
            about things like software packages I&apos;m using, developing with
            NextJS, Python programing, I&apos;ll do some Linux distro reviews,
            I&apos;ll do an in-depth Arch install tutorial, and I&apos;ll talk
            about running web servers and other services on linux machines. I
            will mostly use RedHat CentOS and maybe NixOS for running services
            and focus on Arch based distros for going into gaming and running a
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
