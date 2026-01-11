import FindEventButton from "@/components/FindEventButton/FindEventButton";
import EventCard from "@/components/EventCard";
import events from "@/lib/data";

function page() {
  return (
    <>
      <section>
        <h1 className="text-center text-5xl">
          Your One stop Solution for
          <br />
          Managing Tech Events
        </h1>
        <p className="text-center mt-4 text-2xl">
          Confereneces | Hackathons | Meetings
        </p>
        <FindEventButton />
        {/* Events Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold">Featured Events</h2>
          <br />
          <ul>
            {events.map((event) => {
              return <EventCard key={event.eventId} {...event} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default page;
