import EventDetailContainer from "../_containers/EventDetailContainer";
// import { BiInfoCircle } from "react-icons/bi";

const getEventById = async (id: string) => {
  console.log(id);
  return {
    id: "1",
    name: "Youth Music Festival",
    description:
      "Join us for an exciting day of live music performances by emerging youth bands and artists.",
    imageUrl: "https://picsum.photos/200?random=1",
    startDateTime: "2025-04-15T12:00:00",
    endDateTime: "2025-04-15T18:00:00",
    location: "Central Park, New York",
    organizer: "Youth Culture Collective",
  };
};

async function EventDetailPage({ params }: SearchParamProps) {
  const { id } = await params;
  if (!id) return;

  const event = await getEventById(id);

  return (
    <div>
      <div className="w-[95vw] md:w-[90vw] mx-auto">
        <EventDetailContainer id={id} />

        <div className="w-full mb-12">
          <h2 className="text-4xl font-bold font-mono mb-6">
            Related Category
          </h2>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
