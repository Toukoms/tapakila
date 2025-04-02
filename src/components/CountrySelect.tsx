import React, { useState } from "react";
import countryList from "react-select-country-list";

const CountrySelect = ({
  name,
  onSelect,
}: {
  name?: string;
  onSelect?: (value: string) => void;
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const filteredCountries = countryList()
    .getData()
    .filter((country) =>
      country.label.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="relative">
      <label htmlFor="country" className="block text-sm font-medium mb-2">
        Country
      </label>
      <input
        id="country"
        type="text"
        className="input input-md w-full"
        placeholder="Search your country"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
      />

      <select name={name} className="hidden">
        <option value={query}>{query}</option>
      </select>

      {query && isOpen && (
        <ul className="absolute w-full mt-1 max-h-60 overflow-auto border rounded-md shadow-lg z-10 bg-base-300">
          {filteredCountries.map((country) => (
            <li
              key={`${country.label} ${country.value}`}
              className="cursor-pointer p-2"
              onClick={() => {
                if (onSelect && typeof onSelect === "function")
                  onSelect(country.label);
                setQuery(country.label);
                setIsOpen(false);
              }}
            >
              {country.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySelect;
