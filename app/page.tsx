import Motivation from "./components/motivation/Motivation";
//import PowerStage from "./components/powerStage/PowerStage";
import ProjectComponent from "./components/projects/ProjectComponent";
import VideoBackground from "./components/VideoBackground";

export default function Home() {
  return (
    <div className="">
      <VideoBackground/>
      <div id="projects">
        <ProjectComponent/>
      </div>
      <div id="motivation">
        <Motivation/>
      </div>
     {/* <div id="powerStage">
        <PowerStage/>
      </div> */}
    </div>
  );
}
