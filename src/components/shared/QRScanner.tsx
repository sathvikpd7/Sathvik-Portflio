import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { X } from 'lucide-react';
import Button from './Button';

interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (data: any) => void;
  title?: string;
}

const QRScanner: React.FC<QRScannerProps> = ({
  isOpen,
  onClose,
  onScan,
  title = 'Scan QR Code'
}) => {
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleScan = (result: any) => {
    if (result) {
      try {
        const data = JSON.parse(result.text);
        onScan(data);
        onClose();
      } catch (error) {
        setError('Invalid QR code format');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <QrReader
            constraints={{ facingMode: 'environment' }}
            onResult={handleScan}
            className="w-full h-full"
          />
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="mt-4 flex justify-end">
          <Button
            onClick={onClose}
            variant="outline"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QRScanner; 