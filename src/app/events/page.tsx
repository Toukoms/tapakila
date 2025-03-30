import Filter from "@/features/events/components/Filter";
import EventsContainer from "@/features/events/containers/EventsContainer";

function EventPage() {
  return (
    <div className="container mx-auto min-h-screen py-4 md:py-8">
      <Filter />
      <EventsContainer />
    </div>
  );
}

export default EventPage;
