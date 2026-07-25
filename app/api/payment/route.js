import axios from "axios";
import {
  generateHash,
  generateTransactionReference,
} from "@/lib/bankalfalah";

export async function POST() {
  try {
    const transactionReference = generateTransactionReference();

    // ------------------------
    // Step 1 - Handshake
    // ------------------------

    const handshakeFields = {
      HS_RequestHash: "",
      HS_IsRedirectionRequest: "0",
      HS_ChannelId: process.env.BANK_CHANNEL_ID,
      HS_ReturnURL: process.env.BANK_RETURN_URL,
      HS_MerchantId: process.env.BANK_MERCHANT_ID,
      HS_StoreId: process.env.BANK_STORE_ID,
      HS_MerchantHash: process.env.BANK_MERCHANT_HASH,
      HS_MerchantUsername: process.env.BANK_USERNAME,
      HS_MerchantPassword: process.env.BANK_PASSWORD,
      HS_TransactionReferenceNumber: transactionReference,
    };

    handshakeFields.HS_RequestHash = generateHash(handshakeFields);

    const handshake = await axios.post(
      "https://sandbox.bankalfalah.com/HS/HS/HS",
      new URLSearchParams(handshakeFields),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (handshake.data.success !== "true") {
      return Response.json(handshake.data);
    }

    // ------------------------
    // Step 2 - Payment Form
    // ------------------------

    const paymentFields = {
      AuthToken: handshake.data.AuthToken,
      RequestHash: "",
      ChannelId: "1001",
      Currency: "PKR",
      IsBIN: "0",
      ReturnURL: process.env.BANK_RETURN_URL,

      MerchantId: process.env.BANK_MERCHANT_ID,
      StoreId: process.env.BANK_STORE_ID,

      MerchantHash: process.env.BANK_MERCHANT_HASH,
      MerchantUsername: process.env.BANK_USERNAME,
      MerchantPassword: process.env.BANK_PASSWORD,

      TransactionTypeId: "3",
      TransactionReferenceNumber: transactionReference,
      TransactionAmount: "100",
    };

    paymentFields.RequestHash = generateHash(paymentFields);

    return Response.json({
      success: true,
      paymentFields,
    });
  } catch (err) {
    return Response.json(
      {
        success: false,
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}