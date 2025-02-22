"use client";
import { useAuth } from "@/context/Auth.Context";
import { addOrder } from "@/helpers/cart.helper";
import { IOrder, IProducts } from "@/types";
import { useRouter } from "next/navigation";

export const CartView =  () => {

  const router = useRouter();

  const {userData, setUserData} = useAuth();

  const products: IProducts[] = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") || "[]")
    : [];

  const total = products.reduce((acc, product) => acc + product.price, 0);

  const handleEndTransition = async() => {
    try {
        const productsToPost = products.map((product) => product.id);
        console.log("Token:", userData?.token);
        const orders = await addOrder(userData?.user.id, productsToPost, userData?.token);
        console.log("Respuesta del servidor:", orders);
      if(orders){
        localStorage.removeItem("cart");
        router.push("/");
        alert("Your opperation has been completed successfully");
      }
    } catch (error) {
        
    }
};

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Cart</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1">
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-contain rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-800 font-bold">${product.price}</p>
                </div>
                <button className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-gray-100 border border-gray-300 rounded-lg p-6 shadow-md mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between text-gray-600"
              >
                
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between text-xl font-bold text-gray-800">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button onClick={handleEndTransition} className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartView;