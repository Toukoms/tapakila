import { IoMdCheckmark, IoMdClose } from "react-icons/io";

function Tickets() {
  return (
    <div id="tickets" className="p-8 flex flex-col gap-8 items-center">
      <h1 className="text-5xl font-bold font-mono">Tickets</h1>
      <div className="flex gap-6 items-center flex-wrap justify-center">
        <div className="card bg-base-100 h-56 w-56 shadow-sm outline outline-secondary rounded-lg">
          <div className="card-body">
            <h2 className="text-3xl font-bold">Early Bird</h2>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>General admission</span>
              </li>
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>Early entry</span>
              </li>
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>Discounted price</span>
              </li>
              <li className="opacity-50">
                <IoMdClose size={12} className="inline mr-2 text-error" />
                <span className="line-through">VIP lounge access</span>
              </li>
              <li className="opacity-50">
                <IoMdClose size={12} className="inline mr-2 text-error" />
                <span className="line-through">Backstage pass</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-100 h-56 w-56 shadow-sm outline outline-secondary rounded-lg">
          <div className="card-body">
            <h2 className="text-3xl font-bold">Standard</h2>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>General admission</span>
              </li>
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>Regular entry</span>
              </li>
              <li className="opacity-50">
                <IoMdClose size={12} className="inline mr-2 text-error" />
                <span className="line-through">VIP lounge access</span>
              </li>
              <li className="opacity-50">
                <IoMdClose size={12} className="inline mr-2 text-error" />
                <span className="line-through">Backstage pass</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-100 h-56 w-56 shadow-sm outline outline-secondary rounded-lg">
          <div className="card-body">
            <h2 className="text-3xl font-bold">VIP</h2>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>General admission</span>
              </li>
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>Reserved seating</span>
              </li>
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>VIP lounge access</span>
              </li>
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>Backstage pass</span>
              </li>
              <li>
                <IoMdCheckmark size={12} className="inline mr-2 text-success" />
                <span>Meet & Greet</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
