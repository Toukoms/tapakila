import Image from "next/image";

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

async function EventDetail({ params }: SearchParamProps) {
  const { id } = await params;
  const event = await getEventById(id);

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <Image src={event.imageUrl} alt={`event_detail_${event.id}`} />
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold font-mono">{event.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
