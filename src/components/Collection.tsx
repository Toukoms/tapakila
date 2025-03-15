import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Card from "./Card";

type CollectionProps = {
  type: "All_events" | "Same_category";
  totalPages: number;
  data: IEvent[];
  page?: number;
};

function Collection(props: CollectionProps) {
  const type = props.type;
  const page = props.page || 6;
  const data = props.data.slice(0, page);
  const totalPages = props.totalPages;

  return (
    <div className="flex flex-col gap-4 px-1">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          type === "Same_category" ? "" : "xl:grid-cols-3"
        } gap-4`}
      >
        {data && data.length > 0 ? (
          data.map((d) => (
            <Card
              key={d.id}
              id={d.id}
              name={d.name}
              imageUrl={d.imageUrl}
              location={d.location}
              description={d.description}
              organizer={d.organizer}
              startDateTime={new Date(d.startDateTime)}
              endDateTime={new Date(d.endDateTime)}
            />
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
      {totalPages > page ? (
        <div className="w-full grid place-items-center">
          <div className="join items-center gap-2 w-fit">
            <button className="join-item btn btn-outline border-neutral btn-square mr-1">
              <RiArrowLeftSLine />
            </button>
            <button className="join-item btn w-12 h-12">1</button>
            <button className="join-item btn w-12 h-12">2</button>
            <button className="join-item btn w-12 h-12 btn-disabled">
              ...
            </button>
            <button className="join-item btn w-12 h-12">99</button>
            <button className="join-item btn w-12 h-12">100</button>
            <button className="join-item btn btn-outline border-neutral btn-square ml-1">
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Collection;
