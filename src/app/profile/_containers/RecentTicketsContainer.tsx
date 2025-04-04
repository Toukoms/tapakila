"use client";

import { getUser } from "@/lib/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

const merge = (tickets: TicketBoughtProps[]) => {
  return tickets.reduce((acc, current) => {
    const existing = acc.find(
      (t) => t.title === current.title && t.ticketType === current.ticketType
    );
    if (existing) {
      existing.ticketNumber = Number(existing.ticketNumber);
      existing.ticketNumber += Number(current.ticketNumber);
    } else {
      acc.push(current);
    }
    return acc;
  }, [] as TicketBoughtProps[]);
};

function RecentTicketsContainer() {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    getUser().then((value) => {
      if (value) {
        setUser(value);
      }
    });
  }, []);

  const userId = user?.id;

  const { data, error, isLoading } = useSWR("/tickets/user/" + userId);
  const [ticketsFetched, setTicketsFetched] = useState<TicketBoughtProps[]>([]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setTicketsFetched(merge(data));
    }
  }, [data]);

  return (
    <div className="container max-w-5xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Recent Tickets Bought
      </h2>

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error Getting Data</div>
      ) : data ? (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Event</th>
                <th>Ticket Type</th>
                <th>Ticket Number</th>
              </tr>
            </thead>
            <tbody>
              {ticketsFetched.map((ticket, i) => (
                <tr key={i} className="hover">
                  <th>{i + 1}</th>
                  <td>
                    <Link href={`/events/${ticket.eventId}`} className="link">
                      {ticket.title}
                    </Link>
                  </td>
                  <td>{ticket.ticketType}</td>
                  <td>{ticket.ticketNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="container flex flex-col items-center justify-center">
          <h3>Don&apos;t have buy ticket yet</h3>
          <Link href="/events" className="btn btn-link btn-primary">
            Explore Events
          </Link>
        </div>
      )}
    </div>
  );
}

export default RecentTicketsContainer;
