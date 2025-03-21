import Hero from "@/app/(home)/_components/Hero";
import { FeaturedEvents } from "./_components/FeaturedEvents";
import { HowItWorks } from "./_components/HowItWorks";
import { CallToAction } from "./_components/CallToAction";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedEvents />
      <HowItWorks />
      <CallToAction />
    </div>
  );
}
