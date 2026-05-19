import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    brand: "atelier-11 | velure (dual-track)",
    ts: new Date().toISOString(),
  });
}
