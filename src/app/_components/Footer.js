import React from "react";
import { nanoid } from "nanoid";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import _ from "lodash";

const CONTACTS = [
  {
    _id: nanoid(),
    name: "github",
    url: "https://github.com/devAmlan",
  },
  {
    _id: nanoid(),
    name: "linkedin",
    url: "https://www.linkedin.com/in/amlan-jyoti-sahoo-907a83181/",
  },
  {
    _id: nanoid(),
    name: "gmail",
    url: "mailto:amlandeveloper22@gmail.com",
  },
  {
    _id: nanoid(),
    name: "phone (+91 6371309009)",
    url: "tel:6371309009",
  },
];

function Footer() {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-10">
      <h3 className="text-xl font-bold">Contacts</h3>
      <div className="w-full flex justify-start items-center gap-5 flex-wrap">
        {_.map(CONTACTS, ({ _id, name, url }) => {
          return (
            <Link
              className="flex justify-center items-center gap-2"
              key={_id}
              href={url}
              target={"_blank"}
            >
              <span className="text-base">{name}</span>
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
