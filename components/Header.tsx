
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaLinkedin } from "react-icons/fa"
type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between flex-wrap-reverse gap-2 ">
        <h6 className="text-2xl  font-medium text-zinc-100 ">
          Adarsh Patel
        </h6>
        <div className="flex space-x-2">
          <SocialMediaIcon icon={FiGithub} name="Github" href="https://github.com/adarshzpatel"/>
          <SocialMediaIcon icon={FiTwitter} name="Twitter" href="https://twitter.com/adarshzpatel"/>
          <SocialMediaIcon icon={FaLinkedin} name="LinkedIn" href="https://www.linkedin.com/in/adarshpatelx/"/>
          <SocialMediaIcon icon={FiMail} name="Gmail" href="mailto:adarshzpatel@gmail.com"/>
        </div>
      </div>
      <p className="font-mono">Developer / Designer / Web3 </p>
    </div>
  );
};

export default Header;
