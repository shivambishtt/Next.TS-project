import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/database";
import Event from "@/models/EventModel";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await params;

    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      return NextResponse.json(
        {
          message: "Invalid or missing slug parameter",
        },
        {
          status: 400,
        }
      );
    }
    const event = await Event.findOne({
      slug,
    });
    if (!event) {
      return NextResponse.json(
        { message: "Event with the slug not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Event found successfully", event },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An unknown error occured", error },
      { status: 500 }
    );
  }
}
