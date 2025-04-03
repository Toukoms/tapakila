import EventDetailContainer from "../_containers/EventDetailContainer";
import ReturnBack from "../_components/ReturnBack";
import BuyTickets from "../_components/BuyTickets";

async function EventDetailPage({ params }: SearchParamProps) {
  const { id } = await params;
  if (!id) return;

  return (
    <div className="container p-4 mx-auto">
      <ReturnBack className="my-4 md:my-8" />
      <div>
        <EventDetailContainer id={id} />
        <BuyTickets eventId={id} />
      </div>
    </div>
  );
}

export default EventDetailPage;
