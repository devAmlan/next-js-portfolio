import React from "react";
import _ from "lodash";
import { nanoid } from "nanoid";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    _id: nanoid(),
    heading: "AI Copy generator",
    description:
      "Developed an AI SaaS tool using Next.js 14, Tailwind CSS, Shadcn, Gemini API and Drizzle ORM to generate marketing copy like user personas, tweets, and ad copy. Integrated Drizzle ORM for data handling and Clerk for authentication. Features include account creation, AI-powered content generation, and result saving.",
    techs: [
      "Next.js 14",
      "Tailwind CSS",
      "Shadcn",
      "Gemini API",
      "Drizzle ORM",
      "Clerk authentication",
    ],
    url: "https://github.com/devAmlan/copy_mug",
  },
  {
    _id: nanoid(),
    heading: "E-commerce web app",
    description:
      "Built a dynamic E-commerce web app with React, Redux, and CSS, featuring user authentication, product filtering, add to cart, and wishlist functionalities. Ensured responsive design and optimized performance for seamless user experience.",
    techs: ["React.js", "Redux", "CSS", "Javascript"],
    url: "https://github.com/devAmlan/mlan-store/tree/dev-branch",
  },
  {
    _id: nanoid(),
    heading: "CSS library",
    description:
      "Developed a CSS component library using HTML, CSS, and Vanilla JavaScript to streamline the creation of responsive websites for future projects. The library includes pre-designed components for easy integration and customization.",
    techs: ["HTML", "CSS", "Javascript"],
    url: "https://github.com/devAmlan/Mlan-UI/tree/dev",
  },
  {
    _id: nanoid(),
    heading: "Resume builder",
    description:
      "Built a resume builder application using React.js, allowing users to easily create, view, and download resumes by inputting their data. Integrated an inbuilt JSON viewer for seamless resume preview and management. Enhanced user experience with a clean, intuitive interface and efficient data handling.",
    techs: ["React.js", "CSS", "Context API"],
    url: "https://github.com/devAmlan/resume-builder",
  },

  {
    _id: nanoid(),
    heading: "Directory Next JS app",
    description:
      "Find awesome landing page templates for your next projects.User can filter elements using tags.User can check the description and link of Landing page templates.Built using Next JS,Tailwind CSS,Shadcn,Mongodb,Node JS,Express JS",
    techs: ["Next JS", "Tailwind CSS", "Mongodb", "Node JS", "Express JS"],
    url: "https://github.com/devAmlan/landinglist",
  },
];

function Projects() {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-10">
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
        {_.map(PROJECTS, ({ _id, heading, description, techs, url }) => {
          return (
            <div className="w-full border border-border md:p-5 p-2" key={_id}>
              <div className="w-full flex justify-between items-top">
                <h3 className="text-primary text-base font-semibold mb-5">
                  {heading}
                </h3>
                <Link href={url} target="_blank">
                  <ArrowUpRight className="w-6 h-6 cursor-pointer text-primary" />
                </Link>
              </div>

              <p className="text-sm">{description}</p>
              <div className="flex justify-start items-start flex-col gap-2 mt-2">
                <h5 className="text-xs font-semibold">Technologies</h5>
                <div className="flex justify-start items-center gap-2 flex-wrap">
                  {_.map(techs, (item, index) => (
                    <span
                      className="border-b-2 rounded border-gray-400 bg-gray-200 text-xs font-medium"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
