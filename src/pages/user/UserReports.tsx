import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import PageHeader from '../../components/shared/PageHeader';
import Button from '../../components/shared/Button';

// Mock data for reports
const reports = [
  {
    id: 1,
    title: 'Monthly Meal Consumption',
    description: 'Detailed breakdown of meals taken in the current month',
    date: '2025-03-01',
    type: 'monthly',
  },
  {
    id: 2,
    title: 'Weekly Meal Summary',
    description: 'Summary of meals taken in the past week',
    date: '2025-03-15',
    type: 'weekly',
  },
  {
    id: 3,
    title: 'Dietary Preferences Report',
    description: 'Analysis of your meal choices and preferences',
    date: '2025-03-20',
    type: 'analysis',
  },
];

const UserReports: React.FC = () => {
  const { user } = useAuth();

  const downloadReport = (reportId: number) => {
    // In a real app, this would trigger a download from the backend
    alert(`Downloading report ${reportId}`);
  };

  return (
    <div>
      <PageHeader 
        title="My Reports" 
        description="View and download your meal consumption reports"
        actions={
          <Button
            variant="outline"
            className="flex items-center gap-2"
          >
            <Calendar size={16} />
            Custom Report
          </Button>
        }
      />

      <div className="grid gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white p-6 rounded-lg border shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {report.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Generated on: {new Date(report.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => downloadReport(report.id)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Download size={14} />
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-secondary/50 rounded-lg p-6">
        <h3 className="font-medium mb-2">About Reports</h3>
        <p className="text-sm text-muted-foreground">
          Reports are generated automatically based on your meal consumption patterns.
          You can download them in various formats for your records or dietary planning.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="text-sm flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Monthly reports are generated on the 1st of each month
          </li>
          <li className="text-sm flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Weekly summaries are available every Sunday
          </li>
          <li className="text-sm flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Custom reports can be generated for any date range
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserReports;