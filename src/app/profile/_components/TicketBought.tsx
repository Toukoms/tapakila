"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";

function countTickets(tickets: TicketBoughtProps[]) {
  return tickets.reduce((acc, curr) => acc + Number(curr.ticketNumber), 0);
}

function TicketBought({ userId }: { userId: string }) {
  const { data, error, isLoading } = useSWR("/tickets/user/" + userId);
  const [nbOfTickers, setNbOfTickers] = useState<number>(0);

  useEffect(() => {
    if (data) {
      console.log(data);
      setNbOfTickers(countTickets(data));
    }
  }, [data]);
  return (
    <p className="text-xl font-bold">
      {isLoading ? "..." : error ? "!" : data ? nbOfTickers.toString() : "0"}
    </p>
  );
}

export default TicketBought;
