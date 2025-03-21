import Image from "next/image";
import { LuSearch } from "react-icons/lu";

function Hero() {
  return (
    <div className="relative overflow-hidden flex justify-center items-center h-[60vh]">
      <div className="w-full absolute -z-50 inset-0 bg-gradient-to-r from-primary/30 to-primary/10">
        <Image
          src="/bg-hero.jpg"
          alt="bg-hero-image"
          width={1280}
          height={1080}
          className="absolute inset-0 w-full h-screen opacity-50"
        />
      </div>

      <div className="max-w-4xl flex flex-col p-2 items-center justify-center text-center">
        <h1 className="text-5xl font-bold font-mono">
          The Ultimate Youth Festival Experience
        </h1>
        <p className="py-6">
          Experience electrifying music, unforgettable moments, and global
          gatherings. Celebrate life, meet friends, and create lasting memories.
        </p>

        <div className="relative w-full max-w-lg flex items-center mb-4">
          <LuSearch className="absolute left-4 top-1/2 h-8 w-8 z-50 -translate-y-1/2 text-base-content" />
          <input
            placeholder="Search events, artists, venues..."
            className="input w-full rounded-full py-8 px-16"
          />
          <button className="btn absolute right-4 top-1/2 -translate-y-1/2 rounded-full h-10">
            Search
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button className="btn btn-outline rounded-full bg-background/80 backdrop-blur-md hover:bg-background">
            Music
          </button>
          <button className="btn btn-outline rounded-full bg-background/80 backdrop-blur-md hover:bg-background">
            Technology
          </button>
          <button className="btn btn-outline rounded-full bg-background/80 backdrop-blur-md hover:bg-background">
            Business
          </button>
          <button className="btn btn-outline rounded-full bg-background/80 backdrop-blur-md hover:bg-background">
            Food & Drink
          </button>
          <button className="btn btn-outline rounded-full bg-background/80 backdrop-blur-md hover:bg-background">
            Wellness
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
