
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaLinkedin } from "react-icons/fa"
type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between">
        <h6 className="text-2xl  font-medium text-zinc-100 ">
          Adarsh Patel
        </h6>
        <div className="flex space-x-2">
          <SocialMediaIcon icon={FiGithub} name="Github" href=""/>
          <SocialMediaIcon icon={FiTwitter} name="Twitter" href=""/>
          <SocialMediaIcon icon={FaLinkedin} name="LinkedIn" href=""/>
          <SocialMediaIcon icon={FiMail} name="Gmail" href=""/>
        </div>
      </div>
      <p className="font-fira">Developer / Designer / Web3 </p>
    </div>
  );
};

export default Header;
