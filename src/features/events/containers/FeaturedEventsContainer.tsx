"use client";
import useSWR from "swr";
import EventGrid from "../components/EventGrid";
import { Suspense } from "react";

export default function FeaturedEventsContainer() {
  const { error, data, isLoading } = useSWR("/events/allEventsId");

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error getting Events</p>
      ) : data && data.length > 0 ? (
        <Suspense fallback={<div>Loading events...</div>}>
          <EventGrid type="feat" />
        </Suspense>
      ) : (
        <div className="text-center">
          <p className="text-xl font-medium mb-4">No events for the moment</p>
          <p className="text-2xl font-bold">Stay tuned!</p>
        </div>
      )}
    </div>
  );
}
