import React from 'react'

export const Orders: React.FC<{params: {orderId: string}}> = async ({ params }) => {
  const {orderId} = await params;
  return (
    <div>orders</div>
  )
}

export default Orders;
