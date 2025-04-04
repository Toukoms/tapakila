"use client";
import useSWR from "swr";
import EventCard from "../components/EventCard";
import EventCardSkeleton from "../components/skeletons/EventCardSkeleton";

type EventCardContainerProps = {
  id: string;
};

function EventCardContainer({ id }: EventCardContainerProps) {
  const { error, isLoading, data } = useSWR(`/events/${id}`);
  const event = data as EventProps;
  const { data: ticketTypesData } = useSWR<TicketTypeProps[]>(
    `/ticketTypes/event?eventId=${id}`
  );
  const ticketTypes = ticketTypesData || [];
  const eventWithTicketTypes = { ...event, ticketTypes };
  return (
    <div>
      {isLoading ? (
        <EventCardSkeleton />
      ) : error ? (
        <p>Error fetching event</p>
      ) : (
        <EventCard {...eventWithTicketTypes} />
      )}
    </div>
  );
}

export default EventCardContainer;
