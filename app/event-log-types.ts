export const allowedEventNames = [
  "share_cta_click",
  "ai_draft_interest_click",
  "feedback_click",
] as const;

export type EventName = (typeof allowedEventNames)[number];

export function isAllowedEventName(value: unknown): value is EventName {
  return typeof value === "string" && allowedEventNames.includes(value as EventName);
}
