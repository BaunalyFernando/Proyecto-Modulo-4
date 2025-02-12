import OrdersView from '@/views/Orders.view';
import React from 'react'

export const Orders: React.FC<{params: {orderId: string}}> = async ({ params }) => {
  const {orderId} = await params;
  return (
    <OrdersView/>
  )
}

export default Orders;
