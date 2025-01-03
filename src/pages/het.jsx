import { useState } from "react";
import QRCode from "react-qr-code";
import HomeButton from "../components/homebutton";


function QrCode() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button disabled={!input} onClick={handleGenerateQrCode}>
          Generate
        </button>
        <HomeButton />
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={300} bgColor="#fff" />
      </div>
    </div>
  );
}

export default QrCode;
