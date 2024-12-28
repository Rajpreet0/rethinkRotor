
const Motivation = () => {

    const cards = [
        {
          id: 1,
          image: "images/motivation/motivation1.jpg",
          title: "HOW it works",
          text: "Rotor blades offer durability, lightness, and stability, making them ideal for the construction industry. By reusing rotor blades, rethink*rotor reduces raw material consumption and waste, giving these components a sustainable second life in architecture. Their unique shape and material properties make them a valuable asset for innovative applications in construction.",
        },
        {
          id: 2,
          image: "images/motivation/motivation2.jpg",
          title: "WHERE it is",
          text: "An important aspect when deciding where to use the discarded rotor blades is the proximity to the site of the wind farm that is to be dismantled. This guarantees short transport distances. For this reason, the applications are divided into onshore and offshore applications.",
        },
        {
          id: 3,
          image: "images/motivation/motivation3.jpg",
          title: "Advantage",
          text: "rethink*rotor demonstrates how EoL rotor blades can be repurposed in construction, ensuring a closed material loop. From logistics to reprocessing, the initiative highlights the aesthetic, creative, and sustainable potential of these components, turning waste into opportunity.",
        },
      ];

    

  return(
    <div className="flex flex-col h-auto justify-center items-center p-8 bg-gray-100 space-y-8">
      {/* Header Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-orangeColor mb-4">
          WHY it is good for the environment
        </h1>
        <p className="text-textColor text-sm sm:text-md mt-2">
          The European Union aims to achieve climate neutrality by 2050 through its
          "European Green Deal." This transformation to a circular economy poses
          challenges for the fiber composite industry. Demand for lightweight
          materials, especially in wind energy, is growing, but recycling
          composites like epoxy resin FRPs remains difficult and unsustainable with
          current methods like pyrolysis or shredding.
        </p>
        <p className="text-textColor text-sm sm:text-md mt-2">
          By 2025, around 80,000 tons of end-of-life composite materials are
          expected annually, including 7,500 discarded rotor blades in Germany
          alone. Current disposal methods, such as shredding or thermal recycling
          in cement production, are neither CO₂-neutral nor sustainable, highlighting
          the urgent need for innovative solutions.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform"
          >
            {/* Image Section */}
            <div className="h-48">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-4">
              <h2 className="text-lg font-bold text-orange-500 mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Motivation