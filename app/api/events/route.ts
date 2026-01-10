import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/database";
import Event from "@/models/EventModel";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    const event = Object.fromEntries(formData.entries());

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const overview = formData.get("overview") as string;
    const venue = formData.get("venue") as string;
    const location = formData.get("location") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const mode = formData.get("mode") as string;
    const audience = formData.get("audience") as string;
    const organizer = formData.get("organizer") as string;

    const eventCreated = await Event.create({
      title,
      description,
      overview,
      venue,
      location,
      date,
      time,
      mode,
      audience,
      organizer,
    });
    if (!eventCreated) {
      return NextResponse.json(
        { message: "Error occured while creating the event" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Event successfully created", event: eventCreated },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An unknown error occured", error },
      { status: 500 }
    );
  }
}
