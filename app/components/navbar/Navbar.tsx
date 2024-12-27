import Logo from "../Logo"
import MenuItem from "./MenuItem"

const Navbar = () => {
  return (
    <div className="p-4  w-full flex flex-row items-center justify-between">
        <div className=" start-0">
            <Logo/>
        </div>
        <div className="hidden md:flex w-full space-x-12 justify-center items-center  p-3 ">
            <MenuItem 
              title="Projects"
              isHoverable
              textSize="xl" />
            <MenuItem 
              title="Motivation"
              isHoverable
              textSize="xl" />
            <MenuItem 
              title="Power*Stage"
              isHoverable
              textSize="xl" />
            <MenuItem 
              title="Media"
              isHoverable
              textSize="xl" />
            <MenuItem 
              title="Contact"
              isHoverable
              textSize="xl" />
        </div>
    </div>
  )
}

export default Navbar
