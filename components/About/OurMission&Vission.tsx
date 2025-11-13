import { IMAGES } from "@/public/images";

const OurMissionVision = () => {
  return (
    <div className="py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="">
          <div
            className="text-2xl md:text-4xl font-bold flex justify-center items-center mb-8 h-48 w-48 md:h-64 md:w-64 bg-cover bg-center text-white rounded-full mx-auto shadow-xl border-4 border-white"
            style={{ backgroundImage: `url(/gif/gif5.gif)` }}
          >
            Our Mission
          </div>
          <p className="text-xl lg:text-2xl text-gray-700 text-center px-2 md:px-12 leading-relaxed">
            We bridge the gap between innovative technology and creative excellence. Our mission is to empower businesses worldwide by delivering intelligent solutions that transform ideas into market-leading products, fostering sustainable growth and meaningful connections.
          </p>
        </div>

        <div className="  ">
          <div
            className="text-2xl md:text-4xl font-bold text-white flex justify-center items-center mb-8 h-48 w-48 md:h-64 md:w-64 bg-cover bg-center rounded-full mx-auto shadow-xl border-4 border-white"
            style={{ backgroundImage: `url(/gif/gif.gif)` }}
          >
            Our Vision
          </div>
          <p className="text-xl lg:text-2xl text-gray-700 text-center px-2 md:px-12 leading-relaxed">
            To become the global leader in AI-driven digital transformation, where every solution we create not only solves problems but inspires innovation, shapes industries, and leaves a lasting impact on the businesses and communities we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMissionVision;
