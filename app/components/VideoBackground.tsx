"use client";
import { GoArrowDown } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const VideoBackground = () => {
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
    <div className="realtive h-screen w-full overflow-hidden">
        {/* Video Element */}
        <video
            className="absolute  left-0 w-full h-[90%] object-cover"
            autoPlay
            loop
            muted
            playsInline>
            
            <source src="/videos/background.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>

        {/* Transparent Overlay */}
        <div className="absolute  left-0 w-full h-[90%] bg-black bg-opacity-30"></div>
        

        <div className="relative z-10 flex ml-[50px] items-center md:ml-[200px] h-[80%] text-white">
            <div>
                <h1 className="text-4xl md:text-8xl md:mt-[100px] font-bold">rethink<span className="text-orangeColor">*</span>rotor</h1>
                <h2 className="mt-4 text-2xl  md:text-3xl">supports the way out of the  recycling <br/> dilemma   of rotor blades</h2>
                <div 
                    
                    className="flex items-center justify-center gap-4 w-[200px] border border-orangeColor cursor-pointer mt-4 rounded-lg 
                                hover:scale-105 transition-all p-2">
                    <p className="text-lg text-orangeColor">Find out more</p>
                    <GoArrowDown size={20} className="text-orangeColor" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default VideoBackground