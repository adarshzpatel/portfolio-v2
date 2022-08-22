import { IconType } from "react-icons";
import Tooltip from "./Tooltip";

type SocialMediaIconProps = {
  icon: IconType;
  href: string;
  name: string;
};

const SocialMediaIcon = ({ icon: Icon, href, name }: SocialMediaIconProps) => {
  return (
    <Tooltip content={name}>
      <a target="_blank" rel="noreferrer" href={href}>
        <Icon className="h-8 w-8 p-1.5 hover:-translate-y-1 rounded hover:shadow-2xl duration-300 ease-out bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-200 " />
      </a>
    </Tooltip>
  );
};

export default SocialMediaIcon;
