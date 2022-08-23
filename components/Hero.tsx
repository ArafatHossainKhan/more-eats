/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
            Foods <span className="text-white">Delivered</span>
          </h1>
        </div>

        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="hero-img"
        />
      </div>
    </div>
  );
};

export default Hero;
