import React from 'react';
import { X, CheckCircle2, XCircle } from 'lucide-react';
import Button from './Button';

interface ScanResultDialogProps {
  isOpen: boolean;
  onClose: () => void;
  result: {
    success: boolean;
    message: string;
    data?: any;
  };
}

const ScanResultDialog: React.FC<ScanResultDialogProps> = ({
  isOpen,
  onClose,
  result
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Scan Result</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          {result.success ? (
            <CheckCircle2 size={48} className="text-green-500" />
          ) : (
            <XCircle size={48} className="text-red-500" />
          )}

          <p className="text-lg font-medium">
            {result.message}
          </p>

          {result.data && (
            <div className="w-full p-4 bg-gray-50 rounded-lg">
              <pre className="text-sm text-gray-600 whitespace-pre-wrap">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            onClick={onClose}
            variant={result.success ? 'default' : 'destructive'}
          >
            {result.success ? 'Done' : 'Try Again'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScanResultDialog; 