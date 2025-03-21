import React from "react";
import EventsGrid from "@/components/EventsGrid";
import { events } from "@/constants/events";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export function FeaturedEvents() {
  const featuredEvents = events.slice(0, 3);

  return (
    <section className="py-16 md:py-24 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Featured Events
            </h2>
            <p className="text-muted-foreground mt-2">
              Discover our handpicked selection of unmissable events
            </p>
          </div>

          <Link href="/events" className="btn btn-sm btn-primary">
            View All <BsArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <EventsGrid events={featuredEvents} totalData={3} />

        <div className="mt-10 text-center md:hidden">
          <Link href="/events" className="btn btn-secondary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
