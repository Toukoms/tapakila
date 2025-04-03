const Ticket = ({
  title,
  availableTicket,
  price,
  currency,
}: TicketTypeProps) => {
  return (
    <li className="list-row flex items-center justify-between p-4">
      <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-xs uppercase font-semibold opacity-60">
          {availableTicket} ticket left
        </p>
      </div>
      <p className="text-lg uppercase font-semibold">
        {price} {currency.title}
      </p>
    </li>
  );
};

export default Ticket;
