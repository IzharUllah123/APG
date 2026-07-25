import CryptoJS from "crypto-js";

export function generateTransactionReference() {
  return `TXN${Date.now()}`;
}

export function generateHash(fields) {
  const key = CryptoJS.enc.Utf8.parse(process.env.BANK_KEY1);
  const iv = CryptoJS.enc.Utf8.parse(process.env.BANK_KEY2);

  const mapString = Object.entries(fields)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(mapString),
    key,
    {
      keySize: 128 / 8,
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return encrypted.toString();
}