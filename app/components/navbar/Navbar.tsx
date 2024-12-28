"use client";
import Logo from "../Logo"
import MenuItem from "./MenuItem"
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, offsetY: 100 },
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="p-4 z-10  w-full flex flex-row items-center justify-between drop-shadow-xl">
        <div className=" start-0">
            <Logo/>
        </div>
        <div className="hidden md:flex w-full space-x-12 justify-center items-center  p-3 ">
            <MenuItem 
              title="Projects"
              isHoverable
              isBig 
              onClick={() => handleScrollToSection("projects")}/>
            <MenuItem 
              title="Motivation"
              isHoverable
              isBig 
              onClick={() => handleScrollToSection("motivation")}/>
            <MenuItem 
              title="Power*Stage"
              isHoverable
              isBig 
              onClick={() => handleScrollToSection("powerStage")}/>
            <MenuItem 
              title="Media"
              isHoverable
              isBig />
            <MenuItem 
              title="Contact"
              isHoverable
              isBig />
        </div>
    </div>
  )
}

export default Navbar
