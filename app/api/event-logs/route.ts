import { NextResponse } from "next/server";

import { isAllowedEventName } from "../../event-log-types";
import { createEventLog } from "../../supabase-event-logs";

type EventLogRequestBody = {
  event_name?: unknown;
  page_path?: unknown;
  report_id?: unknown;
};

function cleanOptionalString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim().slice(0, 200) : undefined;
}

export async function POST(request: Request) {
  let body: EventLogRequestBody;

  try {
    body = (await request.json()) as EventLogRequestBody;
  } catch {
    return NextResponse.json({ message: "Invalid event log data." }, { status: 400 });
  }

  if (!isAllowedEventName(body.event_name)) {
    return NextResponse.json({ message: "Invalid event name." }, { status: 400 });
  }

  try {
    await createEventLog({
      eventName: body.event_name,
      pagePath: cleanOptionalString(body.page_path),
      reportId: cleanOptionalString(body.report_id),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to log event." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
