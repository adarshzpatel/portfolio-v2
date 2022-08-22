import React from "react";
import Link, { LinkProps } from "next/link";
import Tooltip from "./Tooltip";

type Props = {
  href: string;
  children: React.ReactNode;
};
const StyledLink = ({ href, children }: Props) => {
  return (
    <Tooltip content="Visit link" className="mt-2">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-[8px] cursor-pointer decoration-zinc-600 hover:decoration-zinc-400 italic font-medium text-zinc-300 hover:text-white duration-300 ease-out font-sora mx-1"
      >
        {" "}
        {children}{" "}
      </a>
    </Tooltip>
  );
};

export default StyledLink;
