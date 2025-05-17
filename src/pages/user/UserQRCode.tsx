import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useAuth } from '../../contexts/AuthContext';
import PageHeader from '../../components/shared/PageHeader';
import Button from '../../components/shared/Button';
import { Download, RefreshCw } from 'lucide-react';

const UserQRCode: React.FC = () => {
  const { user } = useAuth();
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  
  // Generate a timestamp as part of the QR value to simulate dynamic/secure QR codes
  const [timestamp, setTimestamp] = React.useState(new Date().toISOString());
  
  // In a real app, this would use a secure token from the backend
  const qrValue = JSON.stringify({
    userId: user?.id,
    name: user?.name,
    timestamp: timestamp,
    // In a real app, this would include a cryptographic signature
  });
  
  const refreshQRCode = () => {
    setIsRefreshing(true);
    // Simulate a refresh delay
    setTimeout(() => {
      setTimestamp(new Date().toISOString());
      setIsRefreshing(false);
    }, 1000);
  };
  
  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code-canvas') as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `qrcode-${user?.name.split(' ')[0].toLowerCase()}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div>
      <PageHeader 
        title="My QR Code" 
        description="Present this QR code at mealtime for verification"
      />
      
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg border shadow-sm">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Meal Verification Code</h2>
          <p className="text-sm text-muted-foreground">
            This QR code verifies your identity and meal booking. Present it to staff at mealtime.
          </p>
        </div>
        
        <div className="bg-primary/5 rounded-lg p-6 mb-6 flex items-center justify-center">
          {isRefreshing ? (
            <div className="animate-pulse flex flex-col items-center justify-center h-[256px] w-[256px]">
              <RefreshCw size={48} className="text-primary animate-spin" />
              <p className="mt-4 text-sm text-muted-foreground">Refreshing QR Code...</p>
            </div>
          ) : (
            <QRCodeSVG
              id="qr-code-canvas"
              value={qrValue}
              size={256}
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="H"
              includeMargin={false}
            />
          )}
        </div>
        
        <div className="text-sm text-center text-muted-foreground mb-6">
          <p className="font-medium">{user?.name}</p>
          <p>{user?.email}</p>
          {user?.roomNumber && <p>Room: {user?.roomNumber}</p>}
          <p className="mt-2 text-xs">Last updated: {new Date(timestamp).toLocaleTimeString()}</p>
        </div>
        
        <div className="flex flex-col gap-3">
          <Button
            onClick={refreshQRCode}
            variant="outline"
            className="w-full flex items-center justify-center"
            isLoading={isRefreshing}
          >
            <RefreshCw size={16} className="mr-2" />
            Refresh QR Code
          </Button>
          
          <Button
            onClick={downloadQRCode}
            variant="primary"
            className="w-full flex items-center justify-center"
          >
            <Download size={16} className="mr-2" />
            Download QR Code
          </Button>
        </div>
      </div>
      
      <div className="mt-8 max-w-md mx-auto bg-warning/10 p-4 rounded border border-warning/20">
        <h3 className="font-medium text-warning-foreground mb-1">Important Notes</h3>
        <ul className="list-disc list-inside text-sm space-y-1 text-warning-foreground/80">
          <li>QR codes refresh every few minutes for security</li>
          <li>Only present your QR code when you're at the dining area</li>
          <li>This code is uniquely tied to your account and can't be shared</li>
          <li>If you have any issues, please contact the cafeteria staff</li>
        </ul>
      </div>
    </div>
  );
};

export default UserQRCode;