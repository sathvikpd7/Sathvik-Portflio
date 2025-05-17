import QRCode from 'qrcode';

export interface QRCodeData {
  userId: string;
  name: string;
  email: string;
  roomNumber: string;
  mealType?: 'breakfast' | 'lunch' | 'dinner';
  timestamp?: number;
}

export const generateQRCode = async (data: QRCodeData): Promise<string> => {
  try {
    const qrData = JSON.stringify(data);
    const qrCodeDataUrl = await QRCode.toDataURL(qrData, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 300,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
};

export const parseQRCode = (qrData: string): QRCodeData => {
  try {
    return JSON.parse(qrData);
  } catch (error) {
    console.error('Error parsing QR code data:', error);
    throw error;
  }
};

interface UserQRData {
  id: string;
  name: string;
  email: string;
  roomNumber: string;
}

interface MealQRData extends UserQRData {
  mealType: 'breakfast' | 'lunch' | 'dinner';
}

export const generateUserQRCode = async (
  id: string,
  name: string,
  email: string,
  roomNumber: string
): Promise<string> => {
  const userData: UserQRData = {
    id,
    name,
    email,
    roomNumber
  };

  try {
    return await QRCode.toDataURL(JSON.stringify(userData), {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 300,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });
  } catch (error) {
    console.error('Error generating user QR code:', error);
    throw new Error('Failed to generate user QR code');
  }
};

export const generateMealQRCode = async (
  id: string,
  name: string,
  email: string,
  roomNumber: string,
  mealType: 'breakfast' | 'lunch' | 'dinner'
): Promise<string> => {
  const mealData: MealQRData = {
    id,
    name,
    email,
    roomNumber,
    mealType
  };

  try {
    return await QRCode.toDataURL(JSON.stringify(mealData), {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 300,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });
  } catch (error) {
    console.error('Error generating meal QR code:', error);
    throw new Error('Failed to generate meal QR code');
  }
}; 