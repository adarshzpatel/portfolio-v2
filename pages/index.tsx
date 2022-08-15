import type { NextPage } from "next";
import CurlyDivider from "@components/CurlyDivider";
import StyledLink from "@components/StyledLink";
import React from "react";
import Heading from "@components/Heading";


const Home: NextPage = () => {
  return (
    <div>
      <h6 className="text-2xl itali font-medium text-zinc-100 leading-relaxed">
        Adarsh Patel
      </h6>
      <p className="font-inter">Developer / Designer / Web3 </p>
      <div className="my-4">
      <CurlyDivider />
      </div>
      <div>
        <Heading>About</Heading>
        <p>
          Lorem <StyledLink href="#" >ipsum </StyledLink> dolor sit amet consectetur, adipisicing elit. A iusto iure
          officia molestiae. Est dolor soluta magni perferendis molestias, earum
          perspiciatis fugiat dignissimos? Illum saepe, odio cumque pariatur
          labore ea.
        </p>
      </div>
    </div>
  );
};

export default Home;
