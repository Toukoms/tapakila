"use client";
import countryList from "react-select-country-list";
import { cn } from "@/lib/utils";
import useSWR from "swr";
import { useQueryState } from "nuqs";
import { useEffect } from "react";
import useEventStore from "@/store/events";

function Filter({ className }: { className?: string }) {
  const [search, setSearch] = useQueryState("search");
  const [country, setCountry] = useQueryState("country");
  const [tag, setTag] = useQueryState("tag");

  const { data: tags } = useSWR<{ title: string }[]>("/tags");
  const countries = countryList().getData();

  const filterEvents = useEventStore((state) => state.filterEvents);

  // 🔁 Re-run filtering when filters change
  useEffect(() => {
    filterEvents(search ?? "", country ?? "", tag ?? "");
  }, [search, country, tag, filterEvents]);

  return (
    <div
      className={cn(
        "w-full mb-8 border border-gray-400/60 dark:border-gray-100/60 p-3 sm:p-4 md:p-6 rounded-2xl grid grid-rows-3 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-[repeat(5,_auto)] md:justify-start gap-4",
        className
      )}
    >
      <input
        value={search || ""}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        className="input max-sm:w-full md:w-56"
        placeholder="Search by name"
      />

      <select
        className="select max-sm:w-full"
        value={country || ""}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">All Countries</option>
        {countries.map((c) => (
          <option key={c.value} value={c.label}>
            {c.label}
          </option>
        ))}
      </select>

      <select
        className="select max-sm:w-full"
        value={tag || ""}
        onChange={(e) => setTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {tags &&
          tags.map((tag) => (
            <option key={tag.title} value={tag.title}>
              {tag.title}
            </option>
          ))}
      </select>

      {/* <input
        value={minPrice ?? ""}
        onChange={(e) =>
          setMinPrice(e.target.value ? parseInt(e.target.value) : null)
        }
        type="number"
        min={0}
        className="input max-sm:w-full"
        placeholder="Min Price"
      />

      <input
        value={maxPrice ?? ""}
        onChange={(e) =>
          setMaxPrice(e.target.value ? parseInt(e.target.value) : null)
        }
        type="number"
        min={0}
        className="input max-sm:w-full"
        placeholder="Max Price"
      /> */}
    </div>
  );
}

export default Filter;
