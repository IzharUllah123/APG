import ProductCard from "../components/ProductCard";
import CheckoutButton from "../components/CheckoutButton";

export default function Home() {

  return (

    <main className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="w-[450px]">

        <ProductCard />

        <CheckoutButton />

      </div>

    </main>

  );

}