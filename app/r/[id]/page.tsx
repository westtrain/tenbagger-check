import type { Metadata } from "next";
import { headers } from "next/headers";

import { ShareReportError, ShareReportView } from "../../share-report-view";
import {
  getSharePreviewDescription,
  getSharePreviewTitle,
} from "../../share-preview";
import { getStoredShareReport } from "../../supabase-share-reports";

type StoredSharePageProps = {
  params: Promise<{
    id?: string;
  }>;
};

async function getRequestOrigin() {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "http";

  return host ? `${protocol}://${host}` : "http://localhost:3000";
}

export async function generateMetadata({ params }: StoredSharePageProps): Promise<Metadata> {
  const { id } = await params;
  const report = id ? await getStoredShareReport(id) : null;
  const title = getSharePreviewTitle(report);
  const description = getSharePreviewDescription(report);
  const origin = await getRequestOrigin();
  const imageUrl = new URL(id ? `/r/${id}/opengraph-image` : "/r/missing/opengraph-image", origin)
    .toString();

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function StoredSharePage({ params }: StoredSharePageProps) {
  const { id } = await params;
  const report = id ? await getStoredShareReport(id) : null;

  if (!report) {
    return <ShareReportError />;
  }

  return <ShareReportView report={report} />;
}
