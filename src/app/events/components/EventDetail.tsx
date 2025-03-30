import TicketsContainer from "@/features/tickets/containers/TicketsContainer";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BiInfoCircle } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

function EventDetail({
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
}: EventProps) {
  return (
    <div className="w-full grid gap-4 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 xl:grid-rows-1 xl:grid-cols-[30%_1fr_28%] mb-8 pt-4 lg:pt-8">
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
          <p className="badge badge-soft badge-secondary mb-4">
            <CiLocationOn />
            {eventHall.name}, {host.name}
          </p>
          <p className="mb-6 line-clamp-6">{description}</p>
          <p className="font-bold font-mono">By - {user.name}</p>
        </div>
        <div>
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-lg btn-secondary m-1"
            >
              Checkout
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>VIP</a>
              </li>
              <li>
                <a>Standard</a>
              </li>
              <li>
                <a>Early Bird</a>
              </li>
              <li className="bg-base-100 rounded-sm">
                <Link href="/#tickets" className="flex items-center gap-2">
                  <BiInfoCircle /> <span>Learn more</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <TicketsContainer />
    </div>
  );
}

export default EventDetail;
