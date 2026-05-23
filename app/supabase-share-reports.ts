import { normalizeShareReport, type ShareReport } from "./share-report";

const tableName = "share_reports";
const idAlphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
const idLength = 6;

type SupabaseConfig = {
  url: string;
  anonKey: string;
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

function createShareReportId() {
  const bytes = new Uint8Array(idLength);
  crypto.getRandomValues(bytes);

  return Array.from(bytes, (byte) => idAlphabet[byte % idAlphabet.length]).join("");
}

export async function createStoredShareReport(report: ShareReport) {
  const config = getSupabaseConfig();

  if (!config) {
    throw new Error("Supabase environment variables are not configured.");
  }

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const id = createShareReportId();
    const response = await fetch(`${config.url}/rest/v1/${tableName}`, {
      method: "POST",
      headers: {
        ...getSupabaseHeaders(config.anonKey),
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        id,
        data: report,
      }),
    });

    if (response.ok) {
      return id;
    }

    if (response.status !== 409) {
      throw new Error(`Failed to create share report: ${response.status}`);
    }
  }

  throw new Error("Failed to create a unique share report id.");
}

export async function getStoredShareReport(id: string) {
  if (!/^[a-z0-9]{6}$/.test(id)) {
    return null;
  }

  const config = getSupabaseConfig();

  if (!config) {
    return null;
  }

  const query = new URLSearchParams({
    id: `eq.${id}`,
    select: "data",
    limit: "1",
  });
  const response = await fetch(`${config.url}/rest/v1/${tableName}?${query.toString()}`, {
    headers: getSupabaseHeaders(config.anonKey),
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const rows = (await response.json()) as Array<{ data?: unknown }>;
  return normalizeShareReport(rows[0]?.data);
}
