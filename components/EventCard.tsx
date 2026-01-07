import Image from "next/image";
import Link from "next/link";

export interface EventCardProps {
  eventId: number;
  eventTitle: string;
  eventDescription: string;
  eventDuration: string;
  eventLocation: string;
  eventNiche?: string;
  eventImage: string;
}

function EventCard({
  eventId,
  eventTitle,
  eventDescription,
  eventDuration,
  eventLocation,
  eventNiche,
  eventImage,
}: EventCardProps) {
  return (
    <div>
      <Link
        className="flex items-center justify-between text-center"
        href={`/events${eventId}`}
      >
        <h3 className="text-3xl font-semibold">{eventTitle}</h3>
        <h4>{eventDuration}</h4>

        <Image src="/icons/pin.svg" alt="locationIcon" width={20} height={20} />
        <p>{eventLocation}</p>
      </Link>

      <Image src={eventImage} alt="eventImage" width={250} height={250} />
      <p>{eventDescription}</p>
      <br />
    </div>
  );
}

export default EventCard;
