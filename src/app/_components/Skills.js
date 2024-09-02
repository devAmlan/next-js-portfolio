import React from "react";
import { nanoid } from "nanoid";
import _ from "lodash";
import Image from "next/image";

const MY_SKILLS = [
  {
    _id: nanoid(),
    name: "HTML",
    image: "html5.png",
  },
  {
    _id: nanoid(),
    name: "CSS",
    image: "css3.png",
  },
  {
    _id: nanoid(),
    name: "Tailwind CSS",
    image: "tailwindcss.png",
  },
  {
    _id: nanoid(),
    name: "React JS",
    image: "react.png",
  },
  {
    _id: nanoid(),
    name: "Redux",
    image: "redux.png",
  },
  {
    _id: nanoid(),
    name: "Next JS",
    image: "next.svg",
  },
  {
    _id: nanoid(),
    name: "Node JS",
    image: "nodejs.png",
  },
  {
    _id: nanoid(),
    name: "Express JS",
    image: "expressjs.png",
  },
  {
    _id: nanoid(),
    name: "Drizzle ORM",
    image: "drizzleorm.png",
  },
  {
    _id: nanoid(),
    name: "Mongodb",
    image: "mongodb.png",
  },
];
function Skills() {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-10">
      <h3 className="text-xl font-bold">Skills</h3>
      <div className="w-full flex justify-start items-center gap-5 flex-wrap">
        {_.map(MY_SKILLS, ({ _id, name, image }) => {
          return (
            <div className="flex justify-center items-center gap-2" key={_id}>
              <Image
                src={`/icons/${image}`}
                width={24}
                height={24}
                alt="skill-icons"
              />
              <span className="text-sm font-semibold text-primary">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
