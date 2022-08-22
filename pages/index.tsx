import type { GetStaticProps, NextPage } from "next";
import CurlyDivider from "@components/CurlyDivider";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Heading from "@components/Heading";
import Header from "@components/Header";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

 
export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async () => {
  // MDX text - can be from a local file, database, anywhere
  const source = "Hey 👋 , I am Adarsh Patel and I would like to describe myself as a *digital craftsman*  who loves building cool *web apps / dapps* . I also like to participate in *hackathons* , particularly web3/blockchain themed so be sure to lookout for me if you want a team mate. <br/><br/> I am currently a 3rd year CSE Undergraduate Student looking for *internship opportunities.   <br/><br/> My preferred tech stack is *Next.js / React + TailwindCss + TypeScript* . ";
  const mdxSource = await serialize(source);
  return { props: { mdxSource } };
};

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

const Timeline = dynamic(()=> import('@components/Timeline'),{
  suspense:true
})

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
      <section className="mt-4">
        <Heading>Timeline</Heading>
        <Suspense fallback="Loading...">
          <Timeline />
        </Suspense>
      </section>

      {/* Projects */}
      {/* Hackathons */}
      <CurlyDivider />
      <div></div>
    </div>
  );
};

export default Home;
