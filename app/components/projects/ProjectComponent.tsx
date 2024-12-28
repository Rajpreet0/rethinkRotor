"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  { id: 1, title: 'ONSHORE NOISE BARRIER', description: 'The rotor blades, which are set up in a row, are loaded primarily by wind transversely to the longitudinal axis - similar to the initial application in the wind turbine. Therefore, no reinforcements to a significant extent should be necessary.', image: 'images/projects/project1.png' },
  { id: 2, title: 'CANTILEVER BEAM ', description: 'The horizontal segments are mainly subjected to normal force (compression) and secondarily to bending due to the attached roof cladding. The chord reinforcement required for bending and normal force is combined in one element.', image: 'images/projects/project2.png' },
  { id: 3, title: 'STADIUM ROOF', description: 'Clamped at the base into the circumferential ring, the cantilever beams carry only wind loads and the low dead loads. Reinforcement by laminated chord strips will only be necessary close to the restraint in the bending compression and tension area.', image: 'images/projects/project3.png' },
  { id: 4, title: 'ROOF STRUCTURE', description: '', image: 'images/projects/project4.png' },
  { id: 5, title: 'ROOF CONSTRUCTION', description: '', image: 'images/projects/project5.png' },
  { id: 6, title: 'STAGE', description: '', image: 'images/projects/project6.png' },
  { id: 7, title: 'SOLAR PANELS', description: '', image: 'images/projects/project7.png' },
  { id: 8, title: 'PLATFORM ROOF', description: '', image: 'images/projects/project8.png' },
  { id: 9, title: 'OFFSHORE COASTAL PROTECTION', description: '', image: 'images/projects/project9.png' },
  { id: 10, title: 'PONTOON AND FLOATING ISLAND', description: 'The calculation of the buoyancy force is based on the rotor blade Enercon E66. The rotor blade type was installed in wind turbines between 1995 and 2005 and is currently one of the type generation affected by decommissioning in Europe. The rotor blades are each 31 m long. and have a volume of 98.8 m3. The buoyancy force and thus the possible load capacity, after deduction of the dead weight, is 94 tons. Based on these fixed sizes, concepts for floating islands are being developed in the rethink*rotor project, as a provision for land replacement. ', image: 'images/projects/project10.png' }
];


const ProjectComponent = () => {

  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-start bg-orangeColor">
      {/* Header Section */}
      <div className="w-full max-w-6xl mx-auto py-12 text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lightColor">Our Projects</h1>
      </div>

      {/* Slider Container */}
      <div className="w-full max-w-6xl mx-auto mt-[100px] flex items-center justify-between px-4 sm:px-8">
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: false }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col md:flex-row items-center w-full h-auto">
                {/* Left Side - Project Image */}
                <div className="w-full md:w-1/2 flex justify-center px-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-w-md md:max-w-lg h-auto object-cover"
                  />
                </div>

                {/* Right Side - Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-4 mt-6 md:mt-0 text-lightColor">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{project.title}</h2>
                  <p className="mt-4 text-base sm:text-lg lg:text-xl">{project.description || "No description available."}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectComponent
