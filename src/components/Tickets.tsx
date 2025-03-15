function Tickets() {
  return (
    <div className="">
      <h1 className="text-5xl font-bold font-mono">Tickets</h1>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Choose your tickets between all of this
        </li>

        <li className="list-row flex items-center justify-between p-4">
          <div>
            <p className="text-lg font-bold">VIP</p>
            <p className="text-xs uppercase font-semibold opacity-60">
              10 ticket left
            </p>
          </div>
          <p className="text-lg uppercase font-semibold">50.000 MGA</p>
        </li>
      </ul>
    </div>
  );
}

export default Tickets;
