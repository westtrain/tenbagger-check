import { ShareReportError, ShareReportView } from "../../share-report-view";
import { getStoredShareReport } from "../../supabase-share-reports";

type StoredSharePageProps = {
  params: Promise<{
    id?: string;
  }>;
};

export default async function StoredSharePage({ params }: StoredSharePageProps) {
  const { id } = await params;
  const report = id ? await getStoredShareReport(id) : null;

  if (!report) {
    return <ShareReportError />;
  }

  return <ShareReportView report={report} />;
}
