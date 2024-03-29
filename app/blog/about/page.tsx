import Image from "next/image";
import BlogNavBar from "../../../components/blogComponents/BlogNavBar";
import MainNav from "../../../components/MainNav";
export default function Page(props: any) {
  return (
    <div>
      <MainNav display />
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
            Hello, welcome to Odd Parts. Odd Parts is a blog where I will be
            writing about my tech projects and thing I&apos;ve learned as
            I&apos;ve explored and worked in linux and web development.
          </h2>
          <br />
          <br />
          <p>
            My name is O&apos;Dell and I am a web developer, Linux enthusiast,
            and artist with a strong DIY ethos. In my free time I am an avid
            hiker, climber and cyclist. I have a background in the arts and
            achieved my BFA at CUNY Hunter College in NYC in 2015 with a focus
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
            an in-depth Arch install tutorial, and I&apos;ll talk about running
            web servers and other services on linux machines. I mostly use
            RedHat CentOS and Rocky Linux for running services and focus on Arch
            based distros for going into gaming and running a daily driver /
            development environment.
          </p>
          <br />
          <p>Some of my upcoming things I will be writing about include:</p>
          <br />
          <ul className="list-disc pl-5">
            <li>Generating SSL certificates with Let&apos;s Encrypt</li>
            <li>
              How I set up my Arch linux desktop with i3, terminator, and more.
            </li>
            <li>
              Building an automated mushroom fruiting chamber with some friends
              that will include humidity sensors, some raspberry pi and some
              carpentry.
            </li>
            <li>building myself a new PC.</li>
            <li>
              Building a at home cloud storage server using SFTP and a easy to
              use client.
            </li>
            <li>
              Looking at 3JS, Blender and teaching myself some C++ to use
              OpenFrameWorks.
            </li>
            <li>
              Using a variaty of Python Frameworks such as, Django, Flask and
              FastAPI.
            </li>
            <li>
              Creating a media center with a mini PC running linux and hosting a
              Jellyfin server for streaming my video collection.
            </li>
          </ul>
          <br />
          <p>
            I hope you can find some information that will be useful or
            something that might inspire your next project.
          </p>
        </div>
      </div>
    </div>
  );
}
