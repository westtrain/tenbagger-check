"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

import type { EventName } from "./event-log-types";

type TrackedLinkProps = {
  children: ReactNode;
  className?: string;
  eventName: EventName;
  href: string;
  reportId?: string;
  rel?: string;
  target?: string;
};

function logClickEvent(eventName: EventName, reportId?: string) {
  const payload = JSON.stringify({
    event_name: eventName,
    page_path: window.location.pathname,
    report_id: reportId,
  });

  try {
    if (navigator.sendBeacon) {
      const body = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/event-logs", body);
      return;
    }

    void fetch("/api/event-logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
      keepalive: true,
    });
  } catch {
    // Logging must never block the click action.
  }
}

export function TrackedLink({
  children,
  className,
  eventName,
  href,
  reportId,
  rel,
  target,
}: TrackedLinkProps) {
  const handleClick = () => {
    logClickEvent(eventName, reportId);
  };

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target={target} rel={rel} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

type TrackedAnchorProps = ComponentProps<"a"> & {
  eventName: EventName;
  reportId?: string;
};

export function TrackedAnchor({
  children,
  eventName,
  onClick,
  reportId,
  ...props
}: TrackedAnchorProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    logClickEvent(eventName, reportId);
    onClick?.(event);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
