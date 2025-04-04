"use client";
import useSWR from "swr";
import EventGrid from "../components/EventGrid";
import useEventStore from "@/store/events";
import { useEffect } from "react";

export default function EventsContainer() {
  const { error, data, isLoading } = useSWR("/events/allEventsId");
  const { data: events } = useSWR<EventProps[]>("/events/tickets");
  const { setEvents, setEventIds } = useEventStore();

  useEffect(() => {
    if (events) {
      setEvents(events);
    }
  }, [events, setEvents]);

  useEffect(() => {
    if (data) {
      setEventIds(data);
    }
  }, [data, setEventIds]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error getting Events</p>
      ) : data && data.length > 0 ? (
        <EventGrid type="all" />
      ) : (
        <div className="text-center">
          <p className="text-xl font-medium mb-4">No events for the moment</p>
          <p className="text-2xl font-bold">Stay tuned!</p>
        </div>
      )}
    </div>
  );
}
