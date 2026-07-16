import api from "./api";

export const placeOrder = async (cart, token) => {
  const order = {
    items: cart.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
    })),
  };

  const response = await api.post(
    "/orders",
    order,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getMyOrders = async (token) => {
  const response = await api.get(
    "/orders/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
export const cancelOrder = async (orderId, token) => {
  const response = await api.put(
    `/orders/${orderId}/cancel`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};