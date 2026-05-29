import type { EventName } from "./event-log-types";

const tableName = "event_logs";

type SupabaseConfig = {
  url: string;
  anonKey: string;
};

type EventLogInput = {
  eventName: EventName;
  pagePath?: string;
  reportId?: string;
};

function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return {
    url: url.replace(/\/+$/, ""),
    anonKey,
  };
}

function getSupabaseHeaders(anonKey: string) {
  return {
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
    "Content-Type": "application/json",
  };
}

export async function createEventLog({ eventName, pagePath, reportId }: EventLogInput) {
  const config = getSupabaseConfig();

  if (!config) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const response = await fetch(`${config.url}/rest/v1/${tableName}`, {
    method: "POST",
    headers: {
      ...getSupabaseHeaders(config.anonKey),
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      event_name: eventName,
      page_path: pagePath || null,
      report_id: reportId || null,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create event log: ${response.status}`);
  }
}
