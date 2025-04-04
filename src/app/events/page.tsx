"use client";
import Filter from "@/features/events/components/Filter";
import EventsContainer from "@/features/events/containers/EventsContainer";
import { Suspense } from "react";

function EventPage() {
  return (
    <div className="container mx-auto min-h-screen py-4 md:py-8">
      <Suspense fallback={<div>Loading filters...</div>}>
        <Filter />
        <EventsContainer />
      </Suspense>
    </div>
  );
}

export default EventPage;
