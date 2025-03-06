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
        <div className="hero-content max-w-6xl w-full flex-col lg:flex-row items-start">
          <Image
            src={event.imageUrl}
            alt={event.name}
            className="w-full lg:w-1/2 max-h-80 lg:max-h-full object-cover rounded-md"
            width={1280}
            height={1028}
          />
          <div className="flex flex-col w-1/2">
            <h1 className="text-5xl font-bold font-mono">{event.name}</h1>
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
