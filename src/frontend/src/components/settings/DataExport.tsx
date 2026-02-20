import { Button } from '@/components/ui/button';
import { useGetUserData } from '../../hooks/useQueries';
import { exportSensitiveData } from '../../utils/localStorage';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

export default function DataExport() {
  const { data: userData } = useGetUserData();

  const handleExport = () => {
    if (!userData) {
      toast.error('No data to export');
      return;
    }

    const sensitiveData = exportSensitiveData();
    const exportData = {
      userData,
      localData: JSON.parse(sensitiveData),
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tranquility-lounge-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success('Data exported successfully');
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium mb-2">Export Your Data</h3>
        <p className="text-sm text-muted-foreground">
          Download a complete copy of your data in JSON format. This includes your profile, plans, tracking metrics, and locally stored information.
        </p>
      </div>
      <Button onClick={handleExport} variant="outline" className="w-full gap-2">
        <Download className="h-4 w-4" />
        Export Data
      </Button>
    </div>
  );
}
