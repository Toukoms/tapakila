"use client";
import Error from "@/components/Error";

import useSWR from "swr";
import EventDetail from "../components/EventDetail";

function EventDetailContainer({ id }: { id: string }) {
  const { data, error, isLoading } = useSWR(`/events/${id}`);

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <Error />
  ) : (
    <EventDetail {...data} />
  );
}

export default EventDetailContainer;
