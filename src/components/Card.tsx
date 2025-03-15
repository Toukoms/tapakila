import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BsClock, BsTicket } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

type CardProps = {
  id: string;
  name: string;
  imageUrl: string;
  location: string;
  description: string;
  organizer: string;
  startDateTime: Date;
  endDateTime: Date;
};

function Card(props: CardProps) {
  const {
    id,
    name,
    imageUrl,
    location,
    startDateTime,
    endDateTime,
    organizer,
    description,
  } = props;
  return (
    <Link href={`/event/${id}`} className="block w-full">
      <div className="card w-full lg:card-side card-border rounded bg-base-100 shadow-sm">
        <figure className="h-64 aspect-[16/9] lg:w-1/3">
          <Image src={imageUrl} alt={name} width={1280} height={1080} />
        </figure>
        <div className="card-body lg:w-2/3">
          <h2 className="text-2xl text-secondary line-clamp-1 card-title">
            {name}
          </h2>
          <p className="w-full line-clamp-1 flex items-center gap-2">
            <BsTicket size={18} />
            <span>
              Organised by <b>{organizer}</b>
            </span>
          </p>
          <p className="text-sm font-semibold flex items-center gap-2">
            <HiOutlineLocationMarker size={16} />
            <span>{location}</span>
          </p>
          <p className="line-clamp-3">{description}</p>
          <p className="text-xs flex items-center gap-2">
            <BsClock size={12} />
            <span>
              {formatDateTime(startDateTime!).dateTime.toString()}
            </span> -{" "}
            <span>{formatDateTime(endDateTime!).dateTime.toString()}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
