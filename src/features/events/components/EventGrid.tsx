"use client";
import React, { useEffect } from "react";
import EventCardContainer from "../containers/EventCardContainer";
import useEventStore from "@/store/events";
import { useQueryState, parseAsInteger } from "nuqs";

const EventGrid = ({ type }: { type: "feat" | "all" }) => {
  const { paginatedIds, filteredIds, paginate } = useEventStore();
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  useEffect(() => {
    paginate(page);
  }, [page, paginate]);

  const totalPages = Math.ceil(filteredIds.length / 6);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {(type === "feat" ? paginatedIds.slice(0, 3) : paginatedIds).map(
          (id) => (
            <EventCardContainer key={`event_${id}`} id={id} />
          )
        )}
      </div>

      {totalPages > 1 && (
        <div className="join grid grid-cols-2 w-64 mx-auto mt-8">
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
            className="join-item btn btn-outline"
            disabled={page <= 1}
          >
            Previous
          </button>
          <button
            onClick={() => {
              if (page < totalPages) {
                setPage(page + 1);
              }
            }}
            className="join-item btn btn-outline"
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EventGrid;
