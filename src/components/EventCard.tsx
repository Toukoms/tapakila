import { cn, formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { TbCalendarDue, TbClockHour3 } from "react-icons/tb";

const EventCard: React.FC<IEvent & { className?: string }> = ({
  id,
  name,
  imageUrl,
  startDateTime,
  location,
  categories,
  organizer,
  tickets,
  className,
}) => {
  const isAvailable = tickets.some((ticket) => ticket.available > 0);
  const lowestPrice = Math.min(...tickets.map((ticket) => ticket.price));
  const category = categories[0];
  const { dateOnly, timeOnly } = formatDateTime(new Date(startDateTime));
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card transition-all hover-scale shadow-sm hover:shadow-md border border-primary-content/60",
        className
      )}
    >
      <div className="aspect-[16/9] w-full overflow-hidden relative">
        <Image
          src={imageUrl}
          alt={name}
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
          {name}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <TbCalendarDue className="mr-2 h-4 w-4" />
            <span>{dateOnly}</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <TbClockHour3 className="mr-2 h-4 w-4" />
            <span>{timeOnly}</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <MdLocationOn className="mr-2 h-4 w-4" />
            <span className="line-clamp-1">{location}</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <span className="font-medium italic text-base-content/60">
              Organizer:
            </span>
            <span className="ml-2 line-clamp-1 font-bold">{organizer}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto z-50">
          <div className="text-sm">
            {isAvailable ? (
              <span className="font-medium">
                From{" "}
                <span className="text-primary font-semibold">
                  ${lowestPrice.toFixed(2)}
                </span>
              </span>
            ) : (
              <span className="text-destructive font-medium">Sold Out</span>
            )}
          </div>

          <Link
            href={`/events/${id}`}
            className={cn(
              "btn btn-sm cursor-pointer",
              isAvailable ? "btn-primary" : "btn-outline btn-secondary"
            )}
          >
            {isAvailable ? "Get Tickets" : "View Details"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
