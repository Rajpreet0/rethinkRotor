
interface MenuItemProps {
    title: string;
    textSize: string;
    isHoverable: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({title, textSize, isHoverable}) => {
  return (
    <p className={`text-${textSize} font-bold text-textColor cursor-pointer 
                ${isHoverable ? "hover:text-orangeColor hover:scale-105" : ""} transition-all`}>
      {title}
    </p>
  )
}

export default MenuItem
