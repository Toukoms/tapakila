import EventDetailContainer from "../_containers/EventDetailContainer";
import ReturnBack from "../components/ReturnBack";

async function EventDetailPage({ params }: SearchParamProps) {
  const { id } = await params;
  if (!id) return;

  return (
    <div className="container p-4 mx-auto">
      <ReturnBack className="my-4 md:my-8" />
      <div>
        <EventDetailContainer id={id} />
      </div>
    </div>
  );
}

export default EventDetailPage;
