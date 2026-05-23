import { decodeShareReport } from "../share-report";
import { ShareReportError, ShareReportView } from "../share-report-view";

type SharePageProps = {
  searchParams: Promise<{
    data?: string | string[];
  }>;
};

export default async function SharePage({ searchParams }: SharePageProps) {
  const params = await searchParams;
  const rawData = Array.isArray(params.data) ? params.data[0] : params.data;
  const report = rawData ? decodeShareReport(rawData) : null;

  if (!report) {
    return <ShareReportError />;
  }

  return <ShareReportView report={report} />;
}
