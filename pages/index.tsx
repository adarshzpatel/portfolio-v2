import type { GetStaticProps, NextPage } from "next";
import CurlyDivider from "@components/CurlyDivider";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Heading from "@components/Heading";
import Header from "@components/Header";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Tab } from "@headlessui/react";
import StyledLink from "@components/StyledLink";

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async () => {
  // MDX text - can be from a local file, database, anywhere
  const source =
    "Hey 👋 , I am Adarsh Patel and I would like to describe myself as a *digital craftsman*  who loves building cool *web apps / dapps* . I also like to participate in *hackathons* , particularly web3/blockchain themed so be sure to lookout for me if you want a team mate. <br/><br/> I am currently a final year CSE Undergraduate Student looking for *internship opportunities*.   <br/><br/> My preferred tech stack is *Next.js / React + TailwindCss + TypeScript* . ";
  const mdxSource = await serialize(source);
  return { props: { mdxSource } };
};

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

const Timeline = dynamic(() => import("@components/Timeline"), {
  suspense: true,
});

const StyledTab = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tab
      className={({ selected }) =>
        selected
          ? "px-3 py-1 bg-zinc-700 text-zinc-200 rounded  font-sora duration-200 ease-out focus-within:outline-none "
          : "px-3 rounded hover:bg-zinc-700/50 duration-200 ease-out  py-1 font-sora focus-within:outline-none"
      }
    >
      {children}
    </Tab>
  );
};

const Home: NextPage<Props> = ({ mdxSource }) => {
  return (
    <div className="my-8 flex flex-col gap-4">
      <section>
        <Header />
      </section>
      <CurlyDivider />
      <section>
        <Heading>About</Heading>
        <div>{mdxSource && <MDXRemote {...mdxSource} />}</div>
      </section>
      {/* Work Experience */}
      <section className="mt-4 space-y-8">
        <Tab.Group>
          <Tab.List className="bg-zinc-800/50 max-w-fit p-1 rounded-md flex gap-1">
            <StyledTab>Work Expereince / Hackathons</StyledTab>
            <StyledTab>Side Projects</StyledTab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>

              <Suspense fallback="Loading...">
                <Timeline />
              </Suspense>
            </Tab.Panel>
            <Tab.Panel> I am still working on this 🔨. You can find my projects  on <StyledLink href={"https://adarshpatel.notion.site/2b9dc81d464e4737bf58e435e3b41076?v=455796f2573f470e9a77796472dceda7"}>Notion</StyledLink> </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>

      {/* Projects */}
      {/* Hackathons */}
      <CurlyDivider />
      <div></div>
    </div>
  );
};

export default Home;
