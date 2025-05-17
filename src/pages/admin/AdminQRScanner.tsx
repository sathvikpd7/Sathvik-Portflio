import React, { useState } from 'react';
import { QrCode } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import Button from '../../components/shared/Button';
import QRScanner from '../../components/shared/QRScanner';
import ScanResultDialog from '../../components/shared/ScanResultDialog';

interface MealQRData {
  id: string;
  name: string;
  email: string;
  roomNumber: string;
  mealType: 'breakfast' | 'lunch' | 'dinner';
}

const AdminQRScanner: React.FC = () => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [scanResult, setScanResult] = useState<{
    success: boolean;
    message: string;
    data?: MealQRData;
  } | null>(null);

  const handleScan = (data: MealQRData) => {
    // TODO: Send data to backend for verification
    // For now, we'll just show a success message
    setScanResult({
      success: true,
      message: `Successfully verified ${data.mealType} meal for ${data.name}`,
      data
    });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="QR Code Scanner"
        description="Scan meal QR codes to verify attendance"
        icon={QrCode}
      />

      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Click the button below to start scanning meal QR codes.
          </p>
          <Button
            onClick={() => setIsScannerOpen(true)}
            size="lg"
          >
            <QrCode size={20} className="mr-2" />
            Start Scanning
          </Button>
        </div>
      </div>

      <QRScanner
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onScan={handleScan}
        title="Scan Meal QR Code"
      />

      {scanResult && (
        <ScanResultDialog
          isOpen={!!scanResult}
          onClose={() => setScanResult(null)}
          result={scanResult}
        />
      )}
    </div>
  );
};

export default AdminQRScanner; 