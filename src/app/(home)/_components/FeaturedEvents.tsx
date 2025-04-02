import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import FeaturedEventsContainer from "@/features/events/containers/FeaturedEventsContainer";

export function FeaturedEvents() {
  return (
    <section className="py-12 md:py-18 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mt-2">
              Discover the most anticipated events and mark your calendar for
              unforgettable experiences.{" "}
            </p>
          </div>

          <Link
            href="/events"
            className="btn btn-sm btn-primary hidden md:flex"
          >
            View All <BsArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <FeaturedEventsContainer />
        <div className="mt-10 text-center md:hidden">
          <Link href="/events" className="btn btn-secondary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
