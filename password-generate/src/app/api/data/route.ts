import { words } from "./data";
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(words);
}
