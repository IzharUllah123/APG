"use client";

import { useRouter } from "next/navigation";

export default function CheckoutButton() {

    const router = useRouter();

    return (

        <button
            onClick={() => router.push("/checkout")}
            className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
        >
            Proceed To Checkout
        </button>

    );

}