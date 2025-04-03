"use client";
import useSWR from "swr";
import Ticket from "../components/Ticket";

function TicketsContainer({ eventId }: { eventId: string }) {
  const { data, isLoading, error } = useSWR(
    `/ticketTypes/event?eventId=${eventId}`
  );

  const tickets = data as TicketTypeProps[];
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error getting tickets</p>
      ) : (
        <div className="p-4 lg:col-span-2 xl:col-span-1 w-full">
          <h1 className="text-5xl font-bold font-mono">Tickets</h1>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
              Choose your tickets between all of this
            </li>
            {tickets && tickets.length > 0 ? (
              tickets.map((ticket) => <Ticket key={ticket.id} {...ticket} />)
            ) : (
              <p>No tickets for the moment</p>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default TicketsContainer;
