type User = {
  id: string;
  username: string;
  email: string;
};

type IEvent = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
  organizer: string;
};

type Ticket = {
  type: "vip" | "standard" | "early_bird";
  price: number;
};

type Order = {
  id: string;
  event: IEvent;
  ticket: Ticket;
};
