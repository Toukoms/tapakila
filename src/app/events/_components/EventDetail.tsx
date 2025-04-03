import TicketsContainer from "@/features/tickets/containers/TicketsContainer";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

function EventDetail({
  id,
  title,
  eventImage,
  description,
  startDate,
  startTime,
  endDate,
  endTime,
  eventHall,
  host,
  user,
  tag,
}: EventProps) {
  return (
    <div className="w-full grid gap-4 grid-cols-1 lg:grid-rows-[1fr_auto] lg:grid-cols-2 xl:grid-rows-1 xl:grid-cols-[30%_1fr_28%] mb-8 pt-4 lg:pt-8">
      <Image
        src={eventImage}
        alt={title}
        className="w-full max-h-80 aspect-square lg:max-h-full bg-base-200 object-cover rounded-md"
        width={1980}
        height={1980}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold font-mono">{title}</h1>
        <div>
          <p className="mb-4">
            <span className="badge badge-outline badge-accent">
              {startTime} {formatDateTime(new Date(startDate)).dateOnly}
            </span>{" "}
            -{" "}
            <span className="badge badge-outline badge-accent">
              {endTime} {formatDateTime(new Date(endDate)).dateOnly}
            </span>
          </p>
          <p className="badge badge-lg badge-soft badge-primary mb-4">
            {tag.title}
          </p>
          <p className="font-bold text-lg flex gap-2 items-center">
            <CiLocationOn size={18} />
            {eventHall.name}, {host.name}
          </p>
          <p className="mb-6 line-clamp-6">{description}</p>
          <p className="font-bold font-mono">By - {user.name}</p>
        </div>
      </div>

      <TicketsContainer eventId={id} />
    </div>
  );
}

export default EventDetail;
