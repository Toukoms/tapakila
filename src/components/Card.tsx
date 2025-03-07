import Image from "next/image";
import Link from "next/link";

type CardProps = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  location: string;
  startDateTime?: Date;
  endDateTime?: Date;
};

function Card(props: CardProps) {
  const { id, name, imageUrl, description } = props;
  return (
    <Link href={`/event/${id}`} className="block">
      <div className="card w-full lg:card-side card-border bg-base-100 shadow-sm">
        <figure className="h-64 lg:w-1/3">
          <Image src={imageUrl} alt={name} width={1280} height={1028} />
        </figure>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
