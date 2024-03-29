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

export default async function Page() {
  const projects = await getProjects();

  return (
    <div
      className={`h-full w-[100vw]
          bg-black text-white`}
    >
      <MainNav fixed={true} />
      <div className={`w-[100vw] flex flex-row bg-black`}>
        <PorfolioLayout projects={projects} />
      </div>
    </div>
  );
}
