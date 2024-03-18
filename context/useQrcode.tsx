"use client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import QRCode from "qrcode";

// Define the context shape
interface QRCodeContextType {
  generateQRCode: (data: string, size: number) => void;
  qrCodeImageUrl: string;
}

// Create the context
const QRCodeContext = createContext<QRCodeContextType | undefined>(undefined);

// Custom hook to use the QRCodeContext
export const useQRCode = () => {
  const context = useContext(QRCodeContext);
  if (!context) {
    throw new Error("useQRCode must be used within a QRCodeProvider");
  }
  return context;
};

interface QrCodeProviderProps {
  children: ReactNode;
}
// QRCodeProvider component
export const QRCodeProvider: React.FC<QrCodeProviderProps> = ({ children }) => {
  const [qrCodeImageUrl, setQRCodeImageUrl] = useState<string>("");

  const generateQRCode = async (data: string, size: number) => {
    try {
      // Create a new canvas element with the desired size
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;

      // Generate QR code with the canvas
      await QRCode.toCanvas(canvas, data);

      // Convert canvas to image URL
      const url = canvas.toDataURL("image/png");

      setQRCodeImageUrl(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <QRCodeContext.Provider value={{ generateQRCode, qrCodeImageUrl }}>
      {children}
    </QRCodeContext.Provider>
  );
};
