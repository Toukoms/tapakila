import Image from "next/image";

function Hero() {
  return (
    <div className="relative hero mt-12 pt-12 lg:mt-0 lg:min-h-screen">
      <div className="w-full h-screen absolute top-0 left-0 bg-black/60 backdrop-blur-sm -z-40" />
      <Image
        src="/bg-hero.jpg"
        alt="bg-hero-image"
        width={1280}
        height={1080}
        className="absolute top-0 left-0 w-full h-screen -z-50"
      />
      <div className="hero-content max-sm:max-w-full flex-col lg:flex-row-reverse p-4 sm:p-14 w-full">
        <Image
          src="/hero-img.jpg"
          alt="hero-image"
          className="min-w-xs lg:max-w-md rounded-lg shadow-2xl w-full max-h-96 aspect-video object-cover lg:w-auto"
          width={1280}
          height={1080}
        />
        <div className="text-white">
          <h1 className="text-5xl font-bold">
            The Ultimate Youth Festival Experience
          </h1>
          <p className="py-6 w-[90%]">
            Get ready for the hottest parties, electrifying music, and
            unforgettable experiences—wherever you are! From beachside raves to
            country festivals, join the most exciting gatherings of young people
            from around the world. Celebrate life, meet new friends, and create
            memories that last a lifetime. Your next adventure starts here!
          </p>
          <button className="btn btn-secondary">Join the party</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
