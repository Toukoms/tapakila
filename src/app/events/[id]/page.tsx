// import EventsGrid from "@/components/EventsGrid";
import Tickets from "@/components/Tickets";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BiInfoCircle } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
// import { BiInfoCircle } from "react-icons/bi";

const getEventById = async (id: string) => {
  console.log(id);
  return {
    id: "1",
    name: "Youth Music Festival",
    description:
      "Join us for an exciting day of live music performances by emerging youth bands and artists.",
    imageUrl: "https://picsum.photos/200?random=1",
    startDateTime: "2025-04-15T12:00:00",
    endDateTime: "2025-04-15T18:00:00",
    location: "Central Park, New York",
    organizer: "Youth Culture Collective",
  };
};

async function EventDetail({ params }: SearchParamProps) {
  const { id } = await params;
  const event = await getEventById(id);

  return (
    <div>
      <div className="w-[95vw] md:w-[90vw] mx-auto">
        <div className="w-full grid gap-4 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 xl:grid-rows-1 xl:grid-cols-[30%_1fr_28%] mb-8 pt-4 lg:pt-8">
          <Image
            src={event.imageUrl}
            alt={event.name}
            className="w-full max-h-80 h-full lg:max-h-full object-cover rounded-md"
            width={1280}
            height={1028}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold font-mono">{event.name}</h1>
            <div>
              <p className="mb-4">
                <span className="badge badge-outline badge-accent">
                  {formatDateTime(new Date(event.startDateTime)).dateTime}
                </span>{" "}
                -{" "}
                <span className="badge badge-outline badge-accent">
                  {formatDateTime(new Date(event.endDateTime)).dateTime}
                </span>
              </p>
              <p className="badge badge-soft badge-secondary mb-4">
                <CiLocationOn />
                {event.location}
              </p>
              <p className="mb-6 line-clamp-6">{event.description}</p>
              <p className="font-bold font-mono">By - {event.organizer}</p>
            </div>
            <div>
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-lg btn-secondary m-1"
                >
                  Checkout
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>VIP</a>
                  </li>
                  <li>
                    <a>Standard</a>
                  </li>
                  <li>
                    <a>Early Bird</a>
                  </li>
                  <li className="bg-base-100 rounded-sm">
                    <Link href="/#tickets" className="flex items-center gap-2">
                      <BiInfoCircle /> <span>Learn more</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Tickets />
        </div>

        <div className="w-full mb-12">
          <h2 className="text-4xl font-bold font-mono mb-6">
            Related Category
          </h2>
          {/* <EventsGrid
            type={"Same_category"}
            totalPages={2}
            data={[
              {
                id: "3",
                name: "Street Art Showcase",
                description:
                  "A festival of creativity featuring live street art installations by talented young artists.",
                imageUrl: "https://picsum.photos/200?random=3",
                startDateTime: "2025-06-05T10:00:00",
                endDateTime: "2025-06-05T16:00:00",
                location: "Downtown, Chicago",
                organizer: "Creative Youth Society",
              },
              {
                id: "4",
                name: "Skateboard Showdown",
                description:
                  "Watch the best young skateboarders show off their skills in a high-energy competition.",
                imageUrl: "https://picsum.photos/200?random=4",
                startDateTime: "2025-07-01T12:00:00",
                endDateTime: "2025-07-01T17:00:00",
                location: "Venice Beach, California",
                organizer: "Skate Crew",
              },
            ]}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
