

interface MenuItemProps {
    title: string;
    isHoverable: boolean;
    isBig: boolean;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({title, isHoverable, isBig, onClick}) => {
  return (
    <p 
      onClick={onClick}
      className={`font-bold text-textColor cursor-pointer 
                ${isBig ? "text-xl" : "text-lg"}
                ${isHoverable ? "hover:text-orangeColor hover:scale-105" : ""} transition-all`}>
      {title}
    </p>
  )
}

export default MenuItem
