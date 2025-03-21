import React from "react";
import EventCard from "./EventCard";

interface EventsGridProps {
  events: IEvent[];
  totalData: number;
}

const EventsGrid: React.FC<EventsGridProps> = ({ events, totalData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={`event_${event.id}`} {...event} />
        ))}
      </div>
      {totalData > 6 && (
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
          <button className="join-item btn">»</button>
        </div>
      )}
    </div>
  );
};

export default EventsGrid;
