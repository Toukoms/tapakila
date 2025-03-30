import EventDetailContainer from "../_containers/EventDetailContainer";

async function EventDetailPage({ params }: SearchParamProps) {
  const { id } = await params;
  if (!id) return;

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
