import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative overflow-hidden hero lg:min-h-[86dvh]">
      <div className="w-full h-screen absolute top-0 left-0 bg-black/60 backdrop-blur-sm -z-40" />
      <Image
        src="/bg-hero.jpg"
        alt="bg-hero-image"
        width={1280}
        height={1080}
        className="absolute top-0 left-0 w-full h-screen -z-50"
      />
      <div className="hero-content max-sm:max-w-full flex-col lg:flex-row-reverse p-4 md:p-14 lg:py-0 w-full">
        <Image
          src="/hero-img.jpg"
          alt="hero-image"
          className="min-w-xs max-h-96 lg:max-h-full lg:max-w-lg xl:max-w-xl rounded-lg shadow-2xl w-full aspect-video object-cover lg:w-auto"
          width={1280}
          height={1080}
        />
        <div className="text-white w-full lg:w-3/4">
          <h1 className="text-5xl font-bold font-mono">
            The Ultimate Youth Festival Experience
          </h1>
          <p className="py-6 w-[90%]">
            Get ready for the hottest parties, electrifying music, and
            unforgettable experiences—wherever you are! From beachside raves to
            country festivals, join the most exciting gatherings of young people
            from around the world. Celebrate life, meet new friends, and create
            memories that last a lifetime. Your next adventure starts here!
          </p>
          <Link href={"/#events"} className="btn btn-secondary">
            Join the party
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
