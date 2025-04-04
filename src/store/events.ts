import { create } from "zustand";

interface EventState {
  events: EventProps[];
  allEventIds: string[];
  filteredIds: string[];
  paginatedIds: string[];
  setEvents: (events: EventProps[]) => void;
  setEventIds: (eventIds: string[]) => void;
  filterEvents: (
    search?: string,
    country?: string,
    tag?: string,
    minPrice?: number,
    maxPrice?: number
  ) => void;
  paginate: (page?: number) => void;
}

const useEventStore = create<EventState>((set, get) => ({
  events: [],
  allEventIds: [],
  filteredIds: [],
  paginatedIds: [],

  setEvents: (events) =>
    set((state) => ({ events: [...state.events, ...events] })),

  setEventIds: (eventIds) =>
    set(() => ({
      allEventIds: eventIds,
      filteredIds: eventIds,
      paginatedIds: eventIds.slice(0, 6),
    })),

  filterEvents: (search, country, tag, minPrice, maxPrice) => {
    const { allEventIds, events } = get();

    const filtered = allEventIds.filter((id) => {
      const event = events.find((e) => e.id === id);
      if (!event) return false;

      const matchesSearch =
        !search || event.title.toLowerCase().includes(search.toLowerCase());

      const matchesCountry =
        !country ||
        country === "" ||
        event.eventHall?.name.toLowerCase().includes(country.toLowerCase());

      const matchesTag =
        !tag ||
        tag === "" ||
        event.tag?.title.toLowerCase() === tag.toLowerCase();

      const matchesPrice = event.ticketTypes?.some((ticket) => {
        const price = ticket.price;
        const meetsMin = minPrice == null || price >= minPrice;
        const meetsMax = maxPrice == null || price <= maxPrice;
        return meetsMin && meetsMax;
      });

      return (
        matchesSearch && matchesCountry && matchesTag && (matchesPrice ?? true)
      );
    });

    set(() => ({
      filteredIds: filtered,
      paginatedIds: filtered.slice(0, 6),
    }));
  },

  paginate: (page = 1) => {
    const { filteredIds } = get();
    const start = (page - 1) * 6;
    const paginated = filteredIds.slice(start, start + 6);
    set(() => ({ paginatedIds: paginated }));
  },
}));

export default useEventStore;
