import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import Button from './Button';
import { Download } from 'lucide-react';

interface QRCodeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  qrCodeDataUrl: string;
  title: string;
  fileName: string;
}

const QRCodeDialog: React.FC<QRCodeDialogProps> = ({
  isOpen,
  onClose,
  qrCodeDataUrl,
  title,
  fileName
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCodeDataUrl;
    link.download = `${fileName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          <img
            src={qrCodeDataUrl}
            alt="QR Code"
            className="w-64 h-64 object-contain"
          />
          <Button
            variant="outline"
            onClick={handleDownload}
            className="w-full"
          >
            <Download size={16} className="mr-2" />
            Download QR Code
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeDialog; 