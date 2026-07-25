"use client";

import { useState } from "react";

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  async function startPayment() {
    setLoading(true);

    const res = await fetch("/api/payment", {
      method: "POST",
    });

    const data = await res.json();

    console.log("API Response:", data);

    if (!data.success) {
      alert("Handshake Failed");
      setLoading(false);
      return;
    }

    const paymentFields = data.paymentFields;

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://sandbox.bankalfalah.com/SSO/SSO/SSO";

    Object.entries(paymentFields).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <button
        onClick={startPayment}
        className="bg-blue-600 text-white px-8 py-3 rounded"
      >
        {loading ? "Redirecting..." : "Pay with Bank Alfalah"}
      </button>
    </main>
  );
}