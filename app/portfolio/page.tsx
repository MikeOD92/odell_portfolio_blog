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

export default async function Page(props: any) {
  const projects = await getProjects();

  let light = props.light;

  return (
    <div
      className={`h-full w-[100vw]
          bg-black text-white`}
    >
      <MainNav display={true} fixed={true} />
      <div className={`w-[100vw] flex flex-row bg-black`}>
        <PorfolioLayout light={light} projects={projects} />
      </div>
    </div>
  );
}
