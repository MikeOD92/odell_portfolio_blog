import { prisma } from "../../lib/db";
import MainNav from "../../components/MainNav";
import PorfolioLayout from "../../components/portfolio/PorfolioLayout";

async function getProjects() {
  let projects = await prisma.project.findMany({
    include: { imgs: true },
  });
  projects.reverse();
  projects = await JSON.parse(JSON.stringify(projects));
  return projects;
}

export default async function Portfolio(props: any) {
  const projects = await getProjects();

  let light = props.light;

  return (
    <div
      className={`h-full w-[100vw]${
        light
          ? "bg-gradient-to-b from-zinc-100 to-zinc-300 text-black"
          : "bg-black text-white"
      }`}
    >
      <MainNav display={true} />
      <div
        className={`w-[100vw] flex flex-row ${
          light ? "bg-gradient-to-b from-zinc-100 to-zinc-300" : "bg-black"
        }`}
      >
        <PorfolioLayout light={light} projects={projects} />
      </div>
    </div>
    // </div>
  );
}
// export const getServerSideProps = async () => {
//   const posts = (
//     await prisma.project.findMany({
//       include: { imgs: true },
//     })
//   ).reverse();

//   return { props: { posts } };
// };
