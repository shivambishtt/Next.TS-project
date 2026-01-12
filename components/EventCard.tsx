import Image from "next/image";
import Link from "next/link";

export interface EventCardProps {
  eventId?: number;
  title: string;
  description: string;
  time: string;
  location: string;
  image: string;
}

function EventCard({
  eventId,
  title,
  description,
  time,
  location,
  image,
}: EventCardProps) {
  return (
    <div className="mt-4">
      <Link
        className="flex items-center justify-between text-center"
        href={`/events/${eventId}`}
      >
        <h3 className="text-3xl font-semibold">{title}</h3>

        <div className="flex gap-2 items-center">
          <Image
            src="/icons/calendar.svg"
            alt="calendarImage"
            width={15}
            height={15}
          />
          <h4>{time}</h4>
        </div>

        <div className="flex gap-2">
          <Image
            src="/icons/pin.svg"
            alt="locationIcon"
            width={15}
            height={15}
          />
          <p>{location}</p>
        </div>
      </Link>

      <div className="flex gap-5 ">
        <Image src={image} alt="eventImage" width={500} height={250} />
        <p className="top-2 ">{description}</p>
      </div>

      <br />
    </div>
  );
}

export default EventCard;
