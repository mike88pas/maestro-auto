import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    brand: "velure",
    ts: new Date().toISOString(),
  });
}
