"use client";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBlender,
  SiPostman,
  SiRedux,
  SiRubyonrails,
  SiGit,
  SiBootstrap,
  SiGimp,
  SiTestinglibrary,
  SiJest,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAmazonaws,
  SiLinux,
  SiPowershell,
  SiMysql,
  SiRedhat,
  SiCentos,
  SiArchlinux,
  SiGnubash,
} from "react-icons/si";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiJqueryLogo,
  DiSass,
  DiReact,
  DiDatabase,
  DiGulp,
  DiNodejsSmall,
  DiRuby,
  DiPostgresql,
  DiMongodb,
  DiPython,
  DiDjango,
  DiDocker,
  DiHeroku,
} from "react-icons/di";

export default function Skills(props: any) {
  return (
    <div id="skills" className={`${props.expanded ? "hidden" : ""}`}>
      <div className="w-[93vw] md:w-[33.35vw]">
        <div
          className={`p-2 my-2 border-2 border-white border-white text-white `}
        >
          <h3 className="text-4xl titletxt"> Front End</h3>
          <div className="flex flex-row flex-wrap justify-evenly">
            <div className="skillsDiv">
              <DiHtml5 />
              <p>HTML5</p>
            </div>
            <div className="skillsDiv">
              <DiCss3 />
              <p>CSS3</p>
            </div>
            <div className="skillsDiv">
              <DiJsBadge />
              <p>Javascript</p>
            </div>
            <div className="skillsDiv">
              <SiTypescript />
              <p>Typescript</p>
            </div>
            <div className="skillsDiv">
              <DiReact />
              <p>React</p>
            </div>
            <div className="skillsDiv">
              <SiNextdotjs />
              <p>Next.JS</p>
            </div>
            <div className="skillsDiv">
              <SiRedux />
              <p>Redux</p>
            </div>
            <div className="skillsDiv">
              <DiJqueryLogo />
              <p>Jquery</p>
            </div>
            <div className="skillsDiv">
              <SiTailwindcss />
              <p>TailWindCSS</p>
            </div>
            <div className="skillsDiv">
              <SiBootstrap />
              <p>Bootstrap</p>
            </div>
            <div className="skillsDiv">
              <DiSass />
              <p>SaSS</p>
            </div>
            <div className="skillsDiv">
              <DiGulp />
              <p>Gulp</p>
            </div>
          </div>
        </div>
        <div
          className={`p-2 my-2 border-2 border-white border-white text-white`}
        >
          <h3 className="text-4xl titletxt"> Back End </h3>
          <div className="flex flex-row flex-wrap justify-evenly">
            <div className="skillsDiv">
              <DiPython />
              <p>Python</p>
            </div>
            {/* <div className="skillsDiv">
              <DiRuby />
              <p>Ruby</p>
            </div> */}
            <div className="skillsDiv">
              <DiNodejsSmall />
              <p>NodeJS</p>
            </div>
            <div className="skillsDiv">
              <DiDjango />
              <p>Django</p>
            </div>
            {/* <div className="skillsDiv">
              <SiRubyonrails />
              <p>Ruby on Rails</p>
            </div> */}
            <div className="skillsDiv">
              <DiDocker />
              <p>Docker</p>
            </div>
            <div className="skillsDiv">
              <DiDatabase />
              <p>Databases</p>
            </div>
            <div className="skillsDiv">
              <DiPostgresql />
              <p>PostgreSQL</p>
            </div>
            <div className="skillsDiv">
              <SiMysql />
              <p>MySQL</p>
            </div>
            <div className="skillsDiv">
              <DiMongodb />
              <p>MongoDB</p>
            </div>
            <div className="skillsDiv">
              <SiAmazonaws />
              <p>AWS</p>
            </div>
            <div className="skillsDiv">
              <SiPostman />
              <p>Postman</p>
            </div>
          </div>
        </div>
        <div
          className={`p-2 my-2 border-2 border-white border-white text-white`}
        >
          <h3 className="text-4xl titletxt"> Misc.</h3>
          <div className="flex flex-row flex-wrap justify-evenly">
            <div className="skillsDiv">
              <SiGit />
              <p>Git</p>
            </div>
            <div className="skillsDiv">
              <DiHeroku />
              <p>Heroku</p>
            </div>
            <div className="skillsDiv">
              <SiLinux />
              <p>Linux</p>
            </div>
            <div className="skillsDiv">
              <SiRedhat />
              <p>Redhat</p>
            </div>
            <div className="skillsDiv">
              <SiCentos />
              <p>CentOS</p>
            </div>
            <div className="skillsDiv">
              <SiArchlinux />
              <p>Arch</p>
            </div>
            <div className="skillsDiv">
              <SiPowershell />
              <p>PowerShell</p>
            </div>
            <div className="skillsDiv">
              <SiGnubash />
              <p>Bash</p>
            </div>
            <div className="skillsDiv">
              <SiTestinglibrary />
              <p> React Testing Library</p>
            </div>
            <div className="skillsDiv">
              <SiJest />
              <p>Jest</p>
            </div>
            <div className="skillsDiv">
              <SiAdobeillustrator />
              <p> Adobe illustrator</p>
            </div>
            <div className="skillsDiv">
              <SiAdobephotoshop />
              <p>Adobe Photoshop</p>
            </div>
            <div className="skillsDiv">
              <SiAdobepremierepro />
              <p>Adobe Premiere Pro</p>
            </div>
            <div className="skillsDiv">
              <SiBlender />
              <p>Blender</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
