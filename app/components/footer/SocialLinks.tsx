import { IconType } from "react-icons";

interface SocialLinksInterface {
    icon: IconType;
    link: string;
}

const SocialLinks: React.FC<SocialLinksInterface> = ({icon: Icon, link}) => {
  return (
    <a 
        href={link}
        className="p-2 rounded-full bg-lightColor text-textColor flex items-center justify-center">
            <Icon size={16} />
    </a>
  )
}

export default SocialLinks
