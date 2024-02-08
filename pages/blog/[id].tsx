import Image from "next/image";
import { prisma } from "../api/db";
import BlogNavBar from "@/components/BlogNavBar";

export default function BlogPost(props: any) {
  return (
    <div
      className={`pb-24 ${
        props.light ? "bg-zinc-300 text-black" : "bg-black text-white"
      }`}
    >
      <BlogNavBar light={props.light} />
      <div className="w-full pt-24 text-center">
        <h1 className="text-5xl md:text-7xl displaytxt">{props.post.title}</h1>
        <p className="p-5 text-md md:text-xl">{props.post.des}</p>
        <p className="text-sm">{props.post.createdAt}</p>
      </div>
      <div className="w-full h-[50vh] md:h-[70vh] lg:h-screen relative flex flex-col justify-items-center pt-10 md:pt-0">
        <Image
          src={props.post.imgs[0].location}
          // height={1000}
          // width={1000}
          fill={true}
          style={{
            objectFit: "contain",
          }}
          className="p-5 md:px-24 lg:mt-5"
          quality={100}
          alt="blog post splash image"
        />
      </div>
      <div>
        <div>
          <p className="lg:mt-20 px-5 lg:px-24 text-lg text-justify">
            {props.post.body}
          </p>
          {props.post.imgs[1] && props.post.body1 ? (
            <div className="w-full h-1/4 px-5 lg:px-24">
              <div className="w-full h-full flex justify-start py-10">
                <Image
                  src={props.post.imgs[1].location}
                  height={300}
                  width={500}
                  quality={100}
                  alt="blog image"
                />
              </div>
              <p className="w-full text-lg text-justify">{props.post.body1}</p>
            </div>
          ) : props.post.body1 ? (
            <p className="text-lg text-justify px-5 lg:px-24">
              {props.post.body1}
            </p>
          ) : (
            ""
          )}
          {props.post.imgs[2] && props.post.body2 ? (
            <div className="w-full h-1/4 px-5 lg:px-24">
              <div className="w-full h-full flex justify-center py-10">
                <Image
                  src={props.post.imgs[2].location}
                  height={300}
                  width={500}
                  quality={100}
                  alt="blog image"
                />
              </div>
              <p className="w-full text-lg text-justify">{props.post.body2}</p>
            </div>
          ) : props.post.body2 ? (
            <p className="text-lg text-justify px-5 lg:px-24">
              {props.post.body2}
            </p>
          ) : (
            ""
          )}
          {props.post.imgs[3] && props.post.body3 ? (
            <div className="w-full h-1/4 px-5 lg:px-24">
              <div className="w-full h-full flex justify-center py-10">
                <Image
                  src={props.post.imgs[3].location}
                  height={300}
                  width={500}
                  quality={100}
                  alt="blog image"
                />
              </div>
              <p className="w-full text-lg text-justify">{props.post.body3}</p>
            </div>
          ) : props.post.body3 ? (
            <p className="text-lg text-justify px-5 lg:px-24">
              {props.post.body3}
            </p>
          ) : (
            ""
          )}
          {props.post.imgs[4] && props.post.body4 ? (
            <div className="w-full h-1/4 px-5 lg:px-24">
              <div className="w-full h-full flex justify-center py-10">
                <Image
                  src={props.post.imgs[4].location}
                  height={300}
                  width={500}
                  quality={100}
                  alt="blog image"
                />
              </div>
              <p className="w-full text-lg text-justify">{props.post.body4}</p>
            </div>
          ) : props.post.body4 ? (
            <p className="text-lg text-justify px-5 lg:px-24">
              {props.post.body4}
            </p>
          ) : (
            ""
          )}
          {props.post.imgs[5] && props.post.body5 ? (
            <div className="w-full h-1/4 px-5 lg:px-24">
              <div className="w-full h-full flex justify-center py-10">
                <Image
                  src={props.post.imgs[5].location}
                  height={300}
                  width={500}
                  quality={100}
                  alt="blog image"
                />
              </div>
              <p className="w-full text-lg text-justify">{props.post.body5}</p>
            </div>
          ) : props.post.body5 ? (
            <p className="text-lg text-justify px-5 lg:px-24">
              {props.post.body5}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async (context: any) => {
  let post = await prisma.post.findUnique({
    where: { id: parseInt(context.params.id) },
    include: { imgs: true },
  });
  post = JSON.parse(JSON.stringify(post));
  return { props: { post } };
};
