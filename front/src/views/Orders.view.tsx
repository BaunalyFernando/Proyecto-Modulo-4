"use client";
import { useAuth } from "@/context/Auth.Context";
import { getOrders } from "@/helpers/orders.helper";
import { useEffect, useState } from "react";

export const OrdersView = () => {
  const { userData } = useAuth();
  const [orders, setOrders] = useState([]);

  const handleGetOrders = async () => {
    try {
      if(!userData)
      {
        console.log(userData);
       // const user = localStorage.getItem("userSession");
        //const fetchedOrders = await getOrders(userData?.token);
      }
      const fetchedOrders = await getOrders(userData?.token);
      if (Array.isArray(fetchedOrders)) {
        setOrders(fetchedOrders);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    }
  };

  useEffect(() => {
    handleGetOrders();
  }, []);

  const totalAmount = Array.isArray(orders) ? orders.reduce((total, order) => {
    return total + (Array.isArray(order.products) ? order.products.reduce((orderTotal, product) => orderTotal + (product.price || 0), 0) : 0);
  }, 0) : 0;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 p-6">
      <h1 className="text-4xl font-semibold">Your Orders</h1>
      <div className="mt-6 w-full max-w-2xl space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="w-full rounded-lg border p-4 shadow-sm">
              <p className="text-lg font-medium">Status: {order.status?.toLocaleUpperCase()}</p>
              <p className="text-sm text-gray-500">Date: {order.date ? new Date(order.date).toLocaleDateString() : "N/A"}</p>
              <div className="mt-2 space-y-2">
                {Array.isArray(order.products) ? order.products.map((product) => (
                  <div key={product.id} className="flex justify-between border-t pt-2">
                    <p className="text-gray-700">{product.name}</p>
                    <p className="text-gray-900 font-medium">${product.price}</p>
                  </div>
                )) : <p className="text-gray-500">No products found</p>}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No orders found</p>
        )}
        {orders.length > 0 && (
          <div className="mt-6 flex justify-end w-full max-w-2xl">
            <p className="text-lg font-semibold text-gray-900">Total de las compras: ${totalAmount.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersView;
