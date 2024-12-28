import Logo from "../Logo";
import MenuItem from "../navbar/MenuItem";
import SocialLinks from "./SocialLinks";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaVimeoV } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-orangeColor flex flex-col items-center">
      <div className="p-4 w-full flex flex-col lg:flex-row items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start w-full lg:w-auto">
          <Logo />
        </div>

        {/* Menu Items */}
        <div className="flex  flex-col lg:flex-row items-center  justify-center space-y-4 lg:space-y-0 lg:space-x-8 ">
          <MenuItem isHoverable={false} isBig={false} title="Home" />
          <MenuItem isHoverable={false} isBig={false} title="Imprint" />
          <MenuItem isHoverable={false} isBig={false} title="Privacy Policy" />
        </div>

        {/* Social Links */}
        <div className="flex flex-row items-center justify-center space-x-4">
          <SocialLinks
            link="https://www.instagram.com/ox2architekten/?igshid=YmMyMTA2M2Y%3D"
            icon={FaInstagram}
          />
          <SocialLinks
            link="https://www.facebook.com/OX2architekten/"
            icon={FaFacebookF}
          />
          <SocialLinks
            link="https://www.linkedin.com/company/ox2architekten-gmbh/"
            icon={FaLinkedinIn}
          />
          <SocialLinks
            link="https://vimeo.com/840753128"
            icon={FaVimeoV}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;