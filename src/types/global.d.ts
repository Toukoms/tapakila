type CurrencyProps = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type CountryProps = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type RoleProps = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

type UserProps = {
  id: string;
  role: RoleProps;
  username: string;
  name: string;
  email: string;
  emailVerifiedAt: string | null;
  password: string;
  imageUrl: string | null;
  country: CountryProps;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

type EventHallProps = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type HostProps = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type EventProps = {
  id: string;
  eventHall: EventHallProps;
  host: HostProps;
  user: UserProps;
  title: string;
  slug: string;
  description: string;
  eventImage: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  ageLimit: string;
  ticketTypes: TicketTypeProps[];
  createdAt: string;
  updatedAt: string;
  tag: {
    title: string;
  };
};

type TicketTypeProps = {
  id: string;
  event: EventProps;
  title: string;
  slug: string;
  description: string;
  availableTicket: number;
  price: number;
  currency: CurrencyProps;
  createdAt: string;
  updatedAt: string;
};

type TicketProps = {
  id: string;
  event: EventProps;
  ticketType: TicketTypeProps;
  user: UserProps;
  ticketNumber: string;
  amountPaid: string;
  currency: CurrencyProps;
  paymentConfirmed: boolean;
  createdAt: string;
  updatedAt: string;
};

type SearchParamProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};
