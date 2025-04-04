"use client";

import { useReducer, useMemo, useEffect } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import useSWR from "swr";
import Checkout from "./Checkout";

function BuyTickets({ eventId }: { eventId: string }) {
  const reducer = (
    state: TicketTypeWithQts[],
    action: {
      type: "increment" | "decrement" | "reset";
      id?: string;
      payload?: TicketTypeWithQts[];
    }
  ) => {
    switch (action.type) {
      case "increment":
        return state.map((ticket) =>
          ticket.id === action.id
            ? {
                ...ticket,
                quantity:
                  ticket.quantity + 1 > ticket.availableTicket
                    ? ticket.availableTicket
                    : ticket.quantity + 1,
              }
            : ticket
        );
      case "decrement":
        return state.map((ticket) =>
          ticket.id === action.id && ticket.quantity > 0
            ? { ...ticket, quantity: ticket.quantity - 1 }
            : ticket
        );
      case "reset":
        return action.payload || [];
      default:
        throw new Error();
    }
  };

  const { data, error, isLoading } = useSWR(
    `/ticketTypes/event?eventId=${eventId}`
  );

  const ticketsToBuy: TicketTypeWithQts[] = useMemo(() => {
    return data
      ? (data as TicketTypeProps[]).map((ticket) => ({
          ...ticket,
          quantity: 0,
        }))
      : [];
  }, [data]);

  const [ticketsToBuyState, dispatch] = useReducer(reducer, [], () => {
    return data
      ? (data as TicketTypeProps[]).map((ticket) => ({
          ...ticket,
          quantity: 0,
        }))
      : [];
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: "reset", payload: ticketsToBuy });
    }
  }, [data, ticketsToBuy]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error getting tickets</p>;
  if (!data) return <p>No tickets available</p>;

  const openModal = () => {
    (document.getElementById("my_modal_3") as HTMLDialogElement).showModal();
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Purchase Tickets</h2>
      <ul className="list list-inside space-y-2">
        {ticketsToBuy.length ? (
          ticketsToBuyState.map((ticket) => (
            <li
              key={ticket.id}
              className="flex items-center justify-between p-4 border border-accent/40 shadow-inner shadow-accent/60 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <span className="font-black text-xl">{ticket.title}</span>
                <span className="text-sm text-accent font-semibold">
                  {ticket.price} {ticket.currency.title}
                </span>
                {" - "}
                <span className="text-sm text-accent font-semibold">
                  {ticket.availableTicket} Tickets left
                </span>
              </div>

              <span className="flex items-center gap-2">
                <button
                  className="btn btn-sm md:btn-lg btn-ghost"
                  onClick={() => dispatch({ type: "increment", id: ticket.id })}
                >
                  <MdAdd />
                </button>
                <span className="badge badge-sm md:badge-lg badge-ghost">
                  {ticket.quantity}
                </span>
                <button
                  className="btn btn-sm md:btn-lg btn-ghost"
                  onClick={() => dispatch({ type: "decrement", id: ticket.id })}
                >
                  <MdRemove />
                </button>
              </span>
            </li>
          ))
        ) : (
          <p>No tickets</p>
        )}
      </ul>

      <button
        className="btn btn-lg btn-primary mt-6 mx-auto block"
        onClick={openModal}
      >
        Buy Tickets
      </button>
      <dialog id="my_modal_3" className="modal backdrop-blur-lg bg-base-200/50">
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl mb-4">Confirmation</h3>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {ticketsToBuyState
                .filter((ticket) => ticket.quantity > 0)
                .map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.title}</td>
                    <td>{ticket.quantity}</td>
                    <td>
                      {ticket.currency.title} {ticket.price * ticket.quantity}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex gap-2 font-bold text-lg mt-4">
            <span>Total Price:</span>
            <span>
              {ticketsToBuyState.reduce(
                (total, ticket) => total + ticket.price * ticket.quantity,
                0
              )}{" "}
              {ticketsToBuyState[0]?.currency.title}
            </span>
          </div>

          <div className="mt-4">
            <Checkout tickets={ticketsToBuyState} />
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default BuyTickets;
