import { countries } from "@/constants/contries";

function Filter() {
  // https://flagsapi.com/:country_code/:style/:size.png

  return (
    <div className="w-full mb-6 border border-gray-100 dark:border-gray-600 p-3 md:pt-6 md:pl-6 sm:p-4 rounded-md grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-[auto_auto_auto] md:justify-start gap-4">
      <input
        type="search"
        className="input max-sm:w-full"
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
