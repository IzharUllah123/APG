export default function ProductCard() {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6">

      <img
        src="https://picsum.photos/500/250"
        alt="Product"
        className="rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        Premium Membership
      </h1>

      <p className="text-gray-500 mt-2">
        Bank Alfalah Payment Gateway Demo
      </p>

      <div className="mt-6 space-y-2">

        <div className="flex justify-between">
          <span>Price</span>
          <span>PKR 100</span>
        </div>

        <div className="flex justify-between">
          <span>Quantity</span>
          <span>1</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>PKR 100</span>
        </div>

      </div>

    </div>
  );
}