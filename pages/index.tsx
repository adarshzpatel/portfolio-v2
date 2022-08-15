import type { NextPage } from "next";
import CurlyDivider from "@components/CurlyDivider";
import StyledLink from "@components/StyledLink";
import React from "react";
import Heading from "@components/Heading";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

interface WorkExperience {
  from: string;
  to: string;
  title: string;
  subtitle: string;
  description: string;
  additionalInfo?: string[];
  href?: string;
}

const WORK_EXPERIENCE: WorkExperience[] = [
  {
    from: "2022 June",
    to: "Now",
    title: "PRNTS",
    subtitle: "Frontend Engineer",
    description:
      "A collaborative web3 social platform for music fans to connect with their favorite artists, and invest into their future revenues ",
    additionalInfo: [
      "Built whole frontend from scratch using React / Typescript / TailwindCss",
      "Developed component library for internal use",
    ],
    href: "https://prnts.vercel.app",
  },
  {
    from: "2021 Nov",
    to: "2022 Jan",
    title: "DIGI-K-LABS",
    subtitle: "Software Engineer Intern",
    description: "Contributed to Lightvue component library",
  },
];

const Home: NextPage = () => {
  return (
    <div className="my-8 flex flex-col gap-4">
      <section>
        <h6 className="text-2xl itali font-medium text-zinc-100 leading-relaxed">
          Adarsh Patel
        </h6>
        <p className="font-fira">Developer / Designer / Web3 </p>
      </section>

      <CurlyDivider />

      <section>
        <Heading>About</Heading>
        <p>
          Lorem <StyledLink href="#">ipsum </StyledLink> dolor sit amet
          consectetur, adipisicing elit. A iusto iure officia molestiae. Est
          dolor soluta magni perferendis molestias, earum perspiciatis fugiat
          dignissimos? Illum saepe, odio cumque pariatur labore ea.
        </p>
      </section>
      {/* Work Experience */}
      <section>
        <Heading>Work Experience</Heading>
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((item) => (
            <div
              key={item.title}
              className="group rounded-md hover:bg-zinc-800 hover:p-6 cursor-pointer duration-300 easae-out"
            >
              <div className="flex items-center font-sora text-base justify-between">
                <Link
                  target={"_blank"}
                  rel="noreferrer"
                  href={item?.href ? item.href : "#"}
                >
                  <a className="flex gap-1  text-zinc-300 hover:text-white hover:underline underline-offset-4 duration-300 ease-out font-medium items-center">
                    {item.title}
                    <span>
                      <FiArrowUpRight className="h-5 w-5" />
                    </span>
                  </a>
                </Link>
                <p className="col-span-1 text-sm">
                  {item.from} — {item.to}
                </p>
              </div>
              <p className="mb-1.5 font-medium text-sm font-fira text-zinc-400">
                {item.subtitle}
              </p>
              <p className="mb-2">{item.description}</p>
              {item.additionalInfo && (
                <ul className="list-disc pl-4 list-inside space-y-2">
                  {item.additionalInfo.map((info, i) => (
                    <li key={i}>{info}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <section>
        <Heading>Hackathons</Heading>
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((item) => (
            <div
              key={item.title}
              className="group rounded-md hover:bg-zinc-800 hover:p-6 cursor-pointer duration-300 easae-out"
            >
              <div className="flex items-center font-sora text-base justify-between">
                <Link
                  target={"_blank"}
                  rel="noreferrer"
                  href={item?.href ? item.href : "#"}
                >
                  <a className="flex gap-1  text-zinc-300 hover:text-white hover:underline underline-offset-4 duration-300 ease-out font-medium items-center">
                    {item.title}
                    <span>
                      <FiArrowUpRight className="h-5 w-5" />
                    </span>
                  </a>
                </Link>
                <p className="col-span-1 text-sm">
                  {item.from} — {item.to}
                </p>
              </div>
              <p className="mb-1.5 font-medium text-sm font-fira text-zinc-400">
                {item.subtitle}
              </p>
              <p className="mb-2">{item.description}</p>
              {item.additionalInfo && (
                <ul className="list-disc pl-4 list-inside space-y-2">
                  {item.additionalInfo.map((info, i) => (
                    <li key={i}>{info}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <section>
        <Heading>Projects</Heading>
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((item) => (
            <div
              key={item.title}
              className="group rounded-md hover:bg-zinc-800 hover:p-6 cursor-pointer duration-300 easae-out"
            >
              <div className="flex items-center font-sora text-base justify-between">
                <Link
                  target={"_blank"}
                  rel="noreferrer"
                  href={item?.href ? item.href : "#"}
                >
                  <a className="flex gap-1  text-zinc-300 hover:text-white hover:underline underline-offset-4 duration-300 ease-out font-medium items-center">
                    {item.title}
                    <span>
                      <FiArrowUpRight className="h-5 w-5" />
                    </span>
                  </a>
                </Link>
                <p className="col-span-1 text-sm">
                  {item.from} — {item.to}
                </p>
              </div>
              <p className="mb-1.5 font-medium text-sm font-fira text-zinc-400">
                {item.subtitle}
              </p>
              <p className="mb-2">{item.description}</p>
              {item.additionalInfo && (
                <ul className="list-disc pl-4 list-inside space-y-2">
                  {item.additionalInfo.map((info, i) => (
                    <li key={i}>{info}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Projects */}
      {/* Hackathons */}
      <CurlyDivider />
      <div></div>
    </div>
  );
};

export default Home;
