import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLocationOn, MdWarning } from "react-icons/md";
import { TbCalendarDue, TbClockHour3 } from "react-icons/tb";

const EventCard: React.FC<EventProps & { className?: string }> = ({
  id,
  title,
  eventImage,
  tag,
  ticketTypes,
  host,
  eventHall,
  user,
  startDate,
  startTime,
  className,
}) => {
  const isAvailable = ticketTypes.some((ticket) => ticket.availableTicket > 0);
  const lowestPrice = Math.min(...ticketTypes.map((ticket) => ticket.price));
  const ticketsLeft = ticketTypes.reduce(
    (acc, ticket) => acc + Number(ticket.availableTicket),
    0
  );
  const category = tag.title;
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card transition-all hover-scale shadow-sm hover:shadow-md border border-primary-content/60",
        className
      )}
    >
      <Link href={`/events/${id}`} className="w-full h-full">
        <div className="aspect-[16/9] w-full overflow-hidden relative">
          <Image
            src={eventImage}
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width={1280}
            height={1028}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-content">
            {category}
          </span>
        </div>

        <div className="p-5">
          <h3 className="line-clamp-1 text-xl font-semibold tracking-tight mb-2">
            {title}
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <TbCalendarDue className="mr-2 h-4 w-4" />
              <span>{startDate}</span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <TbClockHour3 className="mr-2 h-4 w-4" />
              <span>{startTime}</span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <MdLocationOn className="mr-2 h-4 w-4" />
              <span className="line-clamp-1">
                {eventHall.name}, {host.name}
              </span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <span className="font-medium italic text-base-content/60">
                Organizer:
              </span>
              <span className="ml-2 line-clamp-1 font-bold">{user.name}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto z-50">
            <div className="text-sm">
              {isAvailable ? (
                <span>
                  From{" "}
                  <span className="text-secondary text-lg font-semibold">
                    {lowestPrice} {ticketTypes[0].currency.title}
                  </span>
                </span>
              ) : (
                <span className="text-destructive font-medium line-through">
                  Sold Out
                </span>
              )}
            </div>

            <p className="text-sm font-semibold text-warning flex items-center justify-center">
              <MdWarning size={18} className="mr-1" />{" "}
              <span className="leading-0">
                {ticketsLeft} Ticket{ticketsLeft > 1 ? "s" : ""} left
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
