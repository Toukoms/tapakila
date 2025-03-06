import { events } from "@/constants/events";
import Collection from "./Collection";
import Filter from "./Filter";

function Events() {
  return (
    <div id="events" className="p-4 py-10 sm:p-6 md:p-10 md:py-14">
      <h2 className="text-3xl font-bold font-mono mb-6">Upcoming Events</h2>
      <Filter />
      <Collection
        type={"All_events"}
        totalPages={events.length}
        data={events}
      />
    </div>
  );
}

export default Events;
