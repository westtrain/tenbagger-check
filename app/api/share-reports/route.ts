import { NextResponse } from "next/server";

import { normalizeShareReport } from "../../share-report";
import { createStoredShareReport } from "../../supabase-share-reports";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid share report data." }, { status: 400 });
  }

  const report = normalizeShareReport(body);

  if (!report) {
    return NextResponse.json({ message: "Invalid share report data." }, { status: 400 });
  }

  try {
    const id = await createStoredShareReport(report);
    return NextResponse.json({ id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to create share report." }, { status: 500 });
  }
}
