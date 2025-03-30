import React from "react";
import EventCard from "./EventCard";
import EventCardContainer from "../containers/EventCardContainer";

interface EventGridProps {
  data: string[];
  totalData: number;
}

const EventGrid: React.FC<EventGridProps> = ({ data, totalData }) => {
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {data.length > 0 &&
          data.map((id) => <EventCardContainer key={`event_${id}`} id={id} />)}
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

export default EventGrid;
