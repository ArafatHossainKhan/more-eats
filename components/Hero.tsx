import Image from "next/image";

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
        <div className="w-full sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[500px] h-[300px] relative">
          <Image
            className="-z-10"
            src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="hero-img"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
