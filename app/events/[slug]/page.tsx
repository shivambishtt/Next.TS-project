import { notFound } from "next/navigation";

async function EventDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const request = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/events/${slug}`
  );
  const { event } = await request.json();

  if (!event) {
    return notFound();
  }
  return (
    <div>
      <h1>
        Event Details: <br />
        {slug}
      </h1>
    </div>
  );
}

export default EventDetails;
