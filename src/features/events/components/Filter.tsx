import { countries } from "@/constants/contries";
import { cn } from "@/lib/utils";

function Filter({ className }: { className?: string }) {
  // https://flagsapi.com/:country_code/:style/:size.png

  return (
    <div
      className={cn(
        "w-full mb-8 border border-gray-400/60 dark:border-gray-100/60 p-3 sm:p-4 md:p-6 rounded-2xl grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-[auto_auto_auto] md:justify-start gap-4",
        className
      )}
    >
      <input
        type="search"
        className="input max-sm:w-full md:w-96"
        placeholder="Search by name"
      />
      <input
        type="text"
        className="input max-sm:w-full"
        placeholder="Countries"
        list="countries"
      />
      <datalist id="countries">
        {countries.map((c) => (
          <option key={c.value} value={c.text} />
        ))}
      </datalist>
      <select className="select sm:col-span-2 md:col-span-1 max-md:w-full">
        <option defaultChecked>All</option>
        <option>JavaScript</option>
        <option>Artificial Intelligence</option>
        <option>Automation</option>
      </select>
    </div>
  );
}

export default Filter;
